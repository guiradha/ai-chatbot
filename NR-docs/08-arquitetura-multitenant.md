# Arquitetura Multi-Tenant - Sistema de Segurança e Saúde no Trabalho

## Visão Geral da Arquitetura

### Conceito Multi-Tenant com Login Corporativo

O sistema identifica automaticamente a empresa através do domínio do email corporativo e customiza toda a experiência para aquela organização específica.

```mermaid
User (joao@empresa.com)
    ↓
Email Domain Detection
    ↓
Company Identification (empresa.com → Empresa XYZ)
    ↓
Load Company Theme & Settings
    ↓
Customized Dashboard
```

## Estratégias de Multi-Tenancy

### Estratégia Escolhida: Hybrid Row-Level Security

```typescript
// Modelo Híbrido
interface TenantStrategy {
  shared: {
    database: 'PostgreSQL Main',
    tables: ['courses', 'nr_content', 'system_config'],
    isolation: 'row_level_security'
  },
  isolated: {
    storage: 'S3 Bucket per tenant',
    cache: 'Redis namespace per tenant',
    customContent: 'Separate folders'
  }
}
```

### Vantagens da Abordagem
- ✅ Economia de escala
- ✅ Manutenção simplificada
- ✅ Atualizações centralizadas
- ✅ Isolamento de dados sensíveis
- ✅ Customização flexível

## Fluxo de Autenticação e Identificação

### 1. Processo de Login

```typescript
// Frontend: Login Component
interface LoginFlow {
  // Step 1: User enters corporate email
  email: string; // joao.silva@construtora-abc.com.br
  
  // Step 2: Extract domain
  domain: string; // construtora-abc.com.br
  
  // Step 3: Identify company
  companyLookup: async (domain: string) => {
    // Query company by domain
    const company = await db.companies.findOne({ 
      domains: { $contains: domain }
    });
    
    if (!company) {
      // Redirect to company registration
      return redirect('/company-registration');
    }
    
    return company;
  }
  
  // Step 4: Load company configuration
  loadCompanyConfig: async (companyId: string) => {
    return {
      theme: await getTheme(companyId),
      features: await getFeatures(companyId),
      content: await getCustomContent(companyId)
    }
  }
}
```

### 2. Estrutura de Domínios

```sql
-- Tabela de Empresas
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    subscription_tier VARCHAR(50),
    is_active BOOLEAN DEFAULT true
);

-- Tabela de Domínios Autorizados
CREATE TABLE company_domains (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(id),
    domain VARCHAR(255) UNIQUE NOT NULL,
    is_primary BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    verified_at TIMESTAMP,
    INDEX idx_domain (domain)
);

-- Exemplos de dados
INSERT INTO company_domains (company_id, domain, is_primary) VALUES
('abc-123', 'construtora-abc.com.br', true),
('abc-123', 'abc.com.br', false),
('xyz-456', 'industriaxyz.com', true);
```

### 3. Verificação de Domínio

```typescript
// Processo de verificação de domínio empresarial
interface DomainVerification {
  // Método 1: DNS TXT Record
  dnsVerification: {
    record: 'TXT',
    name: '_safework-verify',
    value: 'safework-domain-abc123xyz',
    checkInterval: 3600 // 1 hour
  },
  
  // Método 2: Email para admin
  emailVerification: {
    to: 'admin@empresa.com',
    token: 'verify-token-abc123',
    expiry: 48 // hours
  },
  
  // Método 3: Upload de arquivo
  fileVerification: {
    path: '/.well-known/safework-verify.txt',
    content: 'domain-verification-abc123'
  }
}
```

## Modelo de Dados Multi-Tenant

### Schema Principal

```typescript
// models/tenant.model.ts
export interface Tenant {
  id: string;
  name: string;
  slug: string;
  domains: string[];
  settings: TenantSettings;
  subscription: Subscription;
  customization: Customization;
  createdAt: Date;
  updatedAt: Date;
}

export interface TenantSettings {
  features: {
    customCertificates: boolean;
    apiAccess: boolean;
    whiteLabel: boolean;
    advancedReports: boolean;
    ssoEnabled: boolean;
  };
  limits: {
    maxUsers: number;
    maxStorageGB: number;
    maxCoursesCustom: number;
  };
  security: {
    mfaRequired: boolean;
    ipWhitelist: string[];
    passwordPolicy: PasswordPolicy;
  };
}

export interface Customization {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
    favicon: string;
    font: string;
  };
  content: {
    welcomeVideo: string;
    customCourses: string[];
    companyPolicies: Document[];
  };
  branding: {
    emailSender: string;
    certificateTemplate: string;
    reportTemplate: string;
  };
}
```

### Isolamento de Dados

```typescript
// middleware/tenantIsolation.ts
export const tenantIsolation = async (req: Request, res: Response, next: NextFunction) => {
  const tenantId = req.user.tenantId;
  
  // Set tenant context for all queries
  req.tenantContext = {
    id: tenantId,
    filter: { tenant_id: tenantId },
    storage: `s3://safework-storage/${tenantId}/`,
    cache: `tenant:${tenantId}:`
  };
  
  // Apply Row Level Security
  await db.setContext('tenant.id', tenantId);
  
  next();
};

// Usage in queries
const getUsers = async (req: Request) => {
  // Automatically filtered by tenant
  return await db.users.find({
    ...req.tenantContext.filter,
    ...req.query
  });
};
```

## Customização por Empresa

### 1. Sistema de Temas

```typescript
// config/theme.system.ts
interface ThemeSystem {
  // Base theme (default)
  baseTheme: Theme;
  
  // Company override
  companyTheme: Partial<Theme>;
  
  // Merge strategy
  mergeThemes: (base: Theme, company: Partial<Theme>) => Theme;
}

// Implementation
const loadCompanyTheme = async (companyId: string): Promise<Theme> => {
  const baseTheme = getBaseTheme();
  const companyOverrides = await db.themes.findOne({ companyId });
  
  return {
    ...baseTheme,
    ...companyOverrides,
    css: generateCSS(baseTheme, companyOverrides)
  };
};

// Generated CSS Variables
const generateCSS = (theme: Theme): string => `
  :root {
    --primary-color: ${theme.primaryColor};
    --secondary-color: ${theme.secondaryColor};
    --font-family: ${theme.fontFamily};
    --border-radius: ${theme.borderRadius};
    --header-height: ${theme.headerHeight};
  }
`;
```

### 2. Conteúdo Personalizado

```typescript
// services/content.service.ts
class ContentService {
  async getCompanyCourses(companyId: string) {
    // Get standard NR courses
    const standardCourses = await this.getStandardCourses();
    
    // Get company-specific courses
    const customCourses = await db.courses.find({
      companyId,
      type: 'custom'
    });
    
    // Get company course overrides
    const overrides = await db.courseOverrides.find({ companyId });
    
    // Merge and return
    return this.mergeCourses(standardCourses, customCourses, overrides);
  }
  
  private mergeCourses(standard: Course[], custom: Course[], overrides: Override[]) {
    return standard.map(course => {
      const override = overrides.find(o => o.courseId === course.id);
      if (override) {
        return { ...course, ...override.changes };
      }
      return course;
    }).concat(custom);
  }
}
```

### 3. White Label Configuration

```typescript
// config/whiteLabel.config.ts
interface WhiteLabelConfig {
  // Domain configuration
  customDomain: {
    enabled: boolean;
    domain: string; // treinamento.empresa.com.br
    ssl: {
      certificate: string;
      key: string;
    };
  };
  
  // Email configuration
  emailSettings: {
    fromName: string; // "Empresa XYZ Treinamentos"
    fromEmail: string; // "treinamento@empresa.com.br"
    replyTo: string;
    smtp: SMTPConfig;
  };
  
  // Complete UI override
  uiOverride: {
    removeVendorBranding: boolean;
    customHeader: ReactComponent;
    customFooter: ReactComponent;
    customLoginPage: ReactComponent;
  };
}
```

## Implementação Técnica

### 1. Backend Architecture

```typescript
// Stack principal
const backendStack = {
  runtime: 'Node.js 20.x',
  framework: 'NestJS',
  database: 'PostgreSQL 15',
  cache: 'Redis 7',
  queue: 'BullMQ',
  storage: 'AWS S3',
  search: 'Elasticsearch',
  monitoring: 'DataDog'
};

// Estrutura de pastas
src/
├── modules/
│   ├── auth/
│   │   ├── strategies/
│   │   │   ├── jwt.strategy.ts
│   │   │   ├── corporate-email.strategy.ts
│   │   │   └── sso.strategy.ts
│   │   └── guards/
│   │       └── tenant.guard.ts
│   ├── tenant/
│   │   ├── tenant.service.ts
│   │   ├── tenant.controller.ts
│   │   └── tenant.module.ts
│   ├── customization/
│   │   ├── theme.service.ts
│   │   ├── content.service.ts
│   │   └── branding.service.ts
│   └── courses/
│       ├── courses.service.ts
│       └── courses.controller.ts
├── middleware/
│   ├── tenant-isolation.middleware.ts
│   └── company-detection.middleware.ts
└── shared/
    ├── database/
    │   └── tenant-context.ts
    └── utils/
        └── domain-parser.ts
```

### 2. Frontend Implementation

```tsx
// app/providers/TenantProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface TenantContextType {
  company: Company | null;
  theme: Theme;
  features: Features;
  content: CustomContent;
}

const TenantContext = createContext<TenantContextType | null>(null);

export const TenantProvider: React.FC = ({ children }) => {
  const [tenantData, setTenantData] = useState<TenantContextType | null>(null);
  
  useEffect(() => {
    loadTenantData();
  }, []);
  
  const loadTenantData = async () => {
    const response = await fetch('/api/tenant/current');
    const data = await response.json();
    setTenantData(data);
    
    // Apply theme
    applyTheme(data.theme);
  };
  
  const applyTheme = (theme: Theme) => {
    // Inject CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    
    // Update favicon
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon && theme.favicon) {
      favicon.href = theme.favicon;
    }
    
    // Update page title
    if (theme.companyName) {
      document.title = `${theme.companyName} - Portal de Treinamentos`;
    }
  };
  
  return (
    <TenantContext.Provider value={tenantData}>
      {tenantData ? children : <LoadingScreen />}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within TenantProvider');
  }
  return context;
};
```

### 3. Database Multi-Tenancy

```sql
-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY tenant_isolation ON users
    FOR ALL
    USING (tenant_id = current_setting('tenant.id')::uuid);

CREATE POLICY tenant_isolation ON courses_progress
    FOR ALL
    USING (tenant_id = current_setting('tenant.id')::uuid);

-- Indexes for performance
CREATE INDEX idx_users_tenant ON users(tenant_id);
CREATE INDEX idx_courses_progress_tenant ON courses_progress(tenant_id);
CREATE INDEX idx_certificates_tenant ON certificates(tenant_id);
```

## Segurança e Isolamento

### 1. Validação de Acesso

```typescript
// guards/tenant-access.guard.ts
@Injectable()
export class TenantAccessGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const requestedTenantId = request.params.tenantId;
    
    // User can only access their own tenant data
    if (requestedTenantId && requestedTenantId !== user.tenantId) {
      throw new ForbiddenException('Access denied to this tenant');
    }
    
    // Validate user is active in tenant
    const tenantUser = await this.validateTenantUser(user.id, user.tenantId);
    if (!tenantUser.isActive) {
      throw new ForbiddenException('User is not active in this tenant');
    }
    
    return true;
  }
}
```

### 2. Prevenção de Data Leakage

```typescript
// interceptors/tenant-response.interceptor.ts
@Injectable()
export class TenantResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        // Remove tenant_id from responses
        if (Array.isArray(data)) {
          return data.map(item => this.sanitizeTenantData(item));
        }
        return this.sanitizeTenantData(data);
      })
    );
  }
  
  private sanitizeTenantData(obj: any) {
    if (!obj) return obj;
    
    // Remove sensitive tenant fields
    delete obj.tenant_id;
    delete obj.internal_notes;
    delete obj.billing_info;
    
    return obj;
  }
}
```

## Monitoramento e Analytics

### 1. Métricas por Tenant

```typescript
// services/analytics.service.ts
class TenantAnalyticsService {
  async getTenantMetrics(tenantId: string) {
    return {
      users: {
        total: await this.countUsers(tenantId),
        active: await this.countActiveUsers(tenantId, 30),
        growth: await this.calculateGrowth(tenantId, 'users')
      },
      training: {
        completionRate: await this.getCompletionRate(tenantId),
        avgTimeToComplete: await this.getAvgCompletionTime(tenantId),
        certificatesIssued: await this.countCertificates(tenantId)
      },
      compliance: {
        overallCompliance: await this.getComplianceRate(tenantId),
        expiringSoon: await this.getExpiringCertificates(tenantId, 30),
        expired: await this.getExpiredCertificates(tenantId)
      },
      engagement: {
        dailyActiveUsers: await this.getDAU(tenantId),
        avgSessionDuration: await this.getAvgSessionTime(tenantId),
        courseEngagement: await this.getCourseEngagement(tenantId)
      }
    };
  }
}
```

### 2. Dashboard Multi-Tenant

```tsx
// components/TenantDashboard.tsx
export const TenantDashboard: React.FC = () => {
  const { company, theme } = useTenant();
  const [metrics, setMetrics] = useState<TenantMetrics>();
  
  useEffect(() => {
    loadMetrics();
  }, [company]);
  
  return (
    <DashboardLayout theme={theme}>
      <Header>
        <CompanyLogo src={company.logo} />
        <Title>Portal de Segurança - {company.name}</Title>
      </Header>
      
      <MetricsGrid>
        <ComplianceCard 
          value={metrics?.compliance.overallCompliance}
          trend={metrics?.compliance.trend}
        />
        <UsersCard 
          total={metrics?.users.total}
          active={metrics?.users.active}
        />
        <TrainingCard 
          completed={metrics?.training.completed}
          inProgress={metrics?.training.inProgress}
        />
        <AlertsCard 
          expiring={metrics?.compliance.expiringSoon}
          expired={metrics?.compliance.expired}
        />
      </MetricsGrid>
      
      <CustomContent>
        {company.customDashboardWidgets?.map(widget => (
          <DynamicWidget key={widget.id} {...widget} />
        ))}
      </CustomContent>
    </DashboardLayout>
  );
};
```

## Migração e Onboarding

### Processo de Onboarding de Nova Empresa

```typescript
// services/onboarding.service.ts
class CompanyOnboardingService {
  async onboardNewCompany(data: OnboardingData) {
    const steps = [
      this.createCompany(data),
      this.verifyDomain(data.domain),
      this.setupInitialTheme(data.companyId),
      this.importUsers(data.users),
      this.assignInitialCourses(data.companyId),
      this.sendWelcomeEmails(data.users),
      this.scheduleTraining(data.admins)
    ];
    
    for (const step of steps) {
      await step;
      await this.logProgress(data.companyId, step.name);
    }
    
    return { success: true, companyId: data.companyId };
  }
}
```

## Conclusão

Esta arquitetura multi-tenant permite:

1. **Identificação Automática**: Login com email corporativo identifica a empresa
2. **Customização Completa**: Interface adaptada para cada empresa
3. **Isolamento Seguro**: Dados completamente isolados entre tenants
4. **Escala Eficiente**: Recursos compartilhados com isolamento lógico
5. **Gestão Simplificada**: Administração centralizada com autonomia por empresa

O sistema está preparado para escalar de 10 para 10.000 empresas mantendo performance, segurança e customização.