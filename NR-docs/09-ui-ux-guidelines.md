# UI/UX Guidelines - Portal Corporativo de Segurança e Saúde

## Princípios de Design

### 1. Clareza Acima de Tudo
- Informações críticas sempre visíveis
- Hierarquia visual clara
- Linguagem simples e direta
- Ações óbvias e intuitivas

### 2. Responsividade Total
- Mobile-first approach
- Funciona em qualquer dispositivo
- Touch-friendly interfaces
- Offline capabilities

### 3. Personalização Inteligente
- Adapta-se ao contexto da empresa
- Respeita a identidade corporativa
- Mantém consistência funcional
- Flexibilidade sem complexidade

## Design System Components

### Estrutura Base da Aplicação

```tsx
// Layout principal customizável
interface AppLayout {
  header: {
    logo: CompanyLogo | DefaultLogo,
    navigation: NavigationItems[],
    userMenu: UserDropdown,
    notifications: NotificationBell
  },
  sidebar: {
    visible: boolean,
    position: 'left' | 'right',
    items: SidebarItems[],
    companyBranding: boolean
  },
  main: {
    breadcrumb: boolean,
    containerWidth: 'full' | 'contained',
    background: ThemeBackground
  },
  footer: {
    visible: boolean,
    content: FooterContent
  }
}
```

### Paleta de Cores Adaptável

```scss
// Sistema de cores com fallback
:root {
  // Cores da empresa (customizáveis)
  --company-primary: var(--custom-primary, #0066CC);
  --company-secondary: var(--custom-secondary, #00AA55);
  --company-accent: var(--custom-accent, #FFB800);
  
  // Cores do sistema (fixas)
  --system-success: #10B981;
  --system-warning: #F59E0B;
  --system-danger: #EF4444;
  --system-info: #3B82F6;
  
  // Escala de cinzas
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  // Modo escuro (automático)
  @media (prefers-color-scheme: dark) {
    --bg-primary: var(--gray-900);
    --bg-secondary: var(--gray-800);
    --text-primary: var(--gray-50);
    --text-secondary: var(--gray-300);
  }
}
```

## Componentes Customizáveis por Empresa

### 1. Tela de Login Corporativa

```tsx
// components/CorporateLogin.tsx
export const CorporateLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState<Company | null>(null);
  
  // Detecta empresa pelo domínio do email
  useEffect(() => {
    const domain = email.split('@')[1];
    if (domain) {
      detectCompany(domain).then(setCompany);
    }
  }, [email]);
  
  return (
    <LoginContainer bg={company?.backgroundImage}>
      <LoginCard>
        {company ? (
          <>
            <CompanyLogo src={company.logo} alt={company.name} />
            <WelcomeMessage>
              Bem-vindo ao Portal de Segurança
              <CompanyName>{company.name}</CompanyName>
            </WelcomeMessage>
          </>
        ) : (
          <>
            <DefaultLogo />
            <DefaultWelcome>
              Portal de Segurança e Saúde no Trabalho
            </DefaultWelcome>
          </>
        )}
        
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu.email@empresa.com.br"
          icon={<EmailIcon />}
        />
        
        {company && (
          <CompanyInfo>
            <SecurityBadge>
              <ShieldIcon /> Ambiente Seguro
            </SecurityBadge>
            <EmployeeCount>
              {company.employeeCount} colaboradores protegidos
            </EmployeeCount>
          </CompanyInfo>
        )}
        
        <LoginButton primary={company?.primaryColor}>
          Continuar
        </LoginButton>
        
        <HelpLinks>
          <Link>Primeiro acesso?</Link>
          <Link>Esqueci minha senha</Link>
          {company?.supportEmail && (
            <Link>Falar com {company.supportTeam || 'Suporte'}</Link>
          )}
        </HelpLinks>
      </LoginCard>
    </LoginContainer>
  );
};
```

### 2. Dashboard Personalizado

```tsx
// components/PersonalizedDashboard.tsx
export const PersonalizedDashboard: React.FC = () => {
  const { company, user } = useAuth();
  const metrics = useCompanyMetrics();
  
  return (
    <DashboardLayout>
      {/* Header com branding da empresa */}
      <DashboardHeader>
        <CompanySection>
          <CompanyLogo src={company.logo} />
          <div>
            <GreetingText>
              {getGreeting()}, {user.firstName}!
            </GreetingText>
            <CompanyContext>
              {company.name} • {user.department}
            </CompanyContext>
          </div>
        </CompanySection>
        
        <QuickActions>
          <ActionButton icon={<CourseIcon />}>
            Meus Treinamentos
          </ActionButton>
          <ActionButton icon={<CertificateIcon />}>
            Certificados
          </ActionButton>
          <ActionButton icon={<SupportIcon />}>
            Ajuda
          </ActionButton>
        </QuickActions>
      </DashboardHeader>
      
      {/* Cards de Status Personalizados */}
      <StatusCards>
        <ComplianceCard
          value={metrics.compliance}
          color={getComplianceColor(metrics.compliance)}
          icon={<ShieldCheckIcon />}
        >
          <CardTitle>Conformidade</CardTitle>
          <CardValue>{metrics.compliance}%</CardValue>
          <CardSubtext>
            {metrics.compliant}/{metrics.total} em dia
          </CardSubtext>
        </ComplianceCard>
        
        <TrainingCard urgency={metrics.urgentTrainings}>
          <CardTitle>Treinamentos Pendentes</CardTitle>
          <CardValue>{metrics.pending}</CardValue>
          {metrics.urgentTrainings > 0 && (
            <UrgentBadge>
              {metrics.urgentTrainings} urgentes
            </UrgentBadge>
          )}
        </TrainingCard>
        
        <CertificateCard>
          <CardTitle>Próximos Vencimentos</CardTitle>
          <ExpiryList>
            {metrics.expiring.map(cert => (
              <ExpiryItem key={cert.id}>
                <CertName>{cert.name}</CertName>
                <DaysLeft critical={cert.days <= 7}>
                  {cert.days} dias
                </DaysLeft>
              </ExpiryItem>
            ))}
          </ExpiryList>
        </CertificateCard>
      </StatusCards>
      
      {/* Conteúdo Customizado da Empresa */}
      {company.customDashboard && (
        <CustomSection>
          {company.welcomeVideo && (
            <WelcomeVideo src={company.welcomeVideo} />
          )}
          
          {company.announcements && (
            <AnnouncementBanner>
              <AnnouncementIcon />
              {company.announcements[0].message}
            </AnnouncementBanner>
          )}
          
          {company.quickLinks && (
            <QuickLinks>
              {company.quickLinks.map(link => (
                <QuickLink 
                  key={link.id}
                  href={link.url}
                  icon={link.icon}
                >
                  {link.label}
                </QuickLink>
              ))}
            </QuickLinks>
          )}
        </CustomSection>
      )}
    </DashboardLayout>
  );
};
```

### 3. Página de Treinamento Adaptativa

```tsx
// components/TrainingPage.tsx
export const TrainingPage: React.FC = () => {
  const { course, company } = useContext();
  
  return (
    <TrainingLayout>
      {/* Header do curso com branding */}
      <CourseHeader bg={company.primaryColor}>
        <BackButton />
        <CourseInfo>
          <CourseCategory>{course.category}</CourseCategory>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseProgress value={course.progress} />
        </CourseInfo>
        <CompanyBadge>
          <CompanyLogo mini src={company.logo} />
        </CompanyBadge>
      </CourseHeader>
      
      {/* Player de vídeo customizado */}
      <VideoPlayer>
        {company.introVideo && course.progress === 0 && (
          <CompanyIntro video={company.introVideo} />
        )}
        <MainContent src={course.currentLesson.video}>
          {/* Marca d'água opcional da empresa */}
          {company.showWatermark && (
            <Watermark src={company.watermark} />
          )}
        </MainContent>
        <VideoControls customColor={company.primaryColor} />
      </VideoPlayer>
      
      {/* Materiais complementares */}
      <Materials>
        <TabContainer>
          <Tab>Conteúdo</Tab>
          <Tab>Materiais</Tab>
          <Tab>Notas</Tab>
          {company.hasCompanyMaterials && (
            <Tab>{company.name}</Tab>
          )}
        </TabContainer>
        
        <TabContent>
          {/* Conteúdo específico da empresa */}
          {company.customContent?.[course.id] && (
            <CompanyContent>
              <SectionTitle>
                Procedimentos {company.name}
              </SectionTitle>
              <CustomMaterials>
                {company.customContent[course.id].map(material => (
                  <MaterialCard key={material.id}>
                    <MaterialIcon type={material.type} />
                    <MaterialInfo>
                      <MaterialName>{material.name}</MaterialName>
                      <MaterialDescription>
                        {material.description}
                      </MaterialDescription>
                    </MaterialInfo>
                    <DownloadButton />
                  </MaterialCard>
                ))}
              </CustomMaterials>
            </CompanyContent>
          )}
        </TabContent>
      </Materials>
    </TrainingLayout>
  );
};
```

### 4. Certificado Personalizado

```tsx
// components/PersonalizedCertificate.tsx
export const PersonalizedCertificate: React.FC<CertificateProps> = ({
  user,
  course,
  company,
  completionDate
}) => {
  return (
    <CertificateContainer className="certificate-pdf">
      {/* Background customizado */}
      <CertificateBackground src={company.certificateBg || defaultBg} />
      
      {/* Header com logos */}
      <CertificateHeader>
        <CompanyLogo src={company.logo} />
        {company.showPlatformLogo && (
          <PlatformLogo src="/logo-platform.svg" />
        )}
      </CertificateHeader>
      
      {/* Conteúdo do certificado */}
      <CertificateBody>
        <Title>CERTIFICADO</Title>
        <Subtitle>de conclusão em Segurança e Saúde no Trabalho</Subtitle>
        
        <MainText>
          Certificamos que
        </MainText>
        
        <UserName>{user.fullName}</UserName>
        <UserInfo>
          CPF: {user.cpf} | Matrícula: {user.employeeId}
        </UserInfo>
        
        <CourseText>
          concluiu com aproveitamento o treinamento de
        </CourseText>
        
        <CourseName>{course.name}</CourseName>
        <CourseDetails>
          Norma Regulamentadora {course.nr} | Carga horária: {course.hours}h
        </CourseDetails>
        
        <CompletionInfo>
          <DateInfo>
            {formatDate(completionDate, 'full')}
          </DateInfo>
          <LocationInfo>
            {company.city}, {company.state}
          </LocationInfo>
        </CompletionInfo>
      </CertificateBody>
      
      {/* Assinaturas */}
      <CertificateSignatures>
        <SignatureBlock>
          <SignatureLine />
          <SignatureName>{company.responsibleName}</SignatureName>
          <SignatureTitle>{company.responsibleTitle}</SignatureTitle>
          <SignatureCompany>{company.name}</SignatureCompany>
        </SignatureBlock>
        
        <SignatureBlock>
          <SignatureLine />
          <SignatureName>{course.instructor}</SignatureName>
          <SignatureTitle>Instrutor</SignatureTitle>
          <SignatureRegistry>{course.instructorRegistry}</SignatureRegistry>
        </SignatureBlock>
      </CertificateSignatures>
      
      {/* Validação */}
      <CertificateFooter>
        <QRCode value={getCertificateUrl(certificate.id)} />
        <ValidationInfo>
          <ValidityText>
            Válido até: {getExpiryDate(completionDate, course.validity)}
          </ValidityText>
          <ValidationCode>
            Código: {certificate.validationCode}
          </ValidationCode>
          <ValidationUrl>
            Validar em: {company.customDomain || 'portal.safework.com.br'}/validar
          </ValidationUrl>
        </ValidationInfo>
      </CertificateFooter>
    </CertificateContainer>
  );
};
```

## Mobile Experience

### Princípios Mobile-First

```tsx
// hooks/useResponsive.ts
export const useResponsive = () => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>();
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice('mobile');
      else if (width < 1024) setDevice('tablet');
      else setDevice('desktop');
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
    isTouch: 'ontouchstart' in window
  };
};
```

### Layout Adaptativo

```scss
// styles/responsive.scss
.dashboard-grid {
  display: grid;
  gap: 1rem;
  
  // Mobile: 1 coluna
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    
    .card {
      padding: 1rem;
      font-size: 0.9rem;
    }
    
    .chart-container {
      height: 200px;
    }
  }
  
  // Tablet: 2 colunas
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem;
  }
  
  // Desktop: 3-4 colunas
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2rem;
  }
}

// Bottom navigation for mobile
.mobile-nav {
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background: var(--bg-primary);
    border-top: 1px solid var(--border-color);
    padding: 0.5rem;
    z-index: 1000;
    
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      
      .icon {
        font-size: 1.25rem;
      }
      
      .label {
        font-size: 0.75rem;
      }
    }
  }
  
  @media (min-width: 768px) {
    display: none;
  }
}
```

## Acessibilidade (A11y)

### Implementação WCAG 2.1 AA

```tsx
// components/AccessibleButton.tsx
export const AccessibleButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading,
  disabled,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel || typeof children === 'string' ? children : undefined}
      aria-busy={loading}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(e);
        }
      }}
      {...props}
    >
      {loading ? (
        <>
          <Spinner aria-hidden="true" />
          <VisuallyHidden>Carregando...</VisuallyHidden>
        </>
      ) : (
        children
      )}
    </button>
  );
};

// Componente para texto oculto visualmente mas acessível
export const VisuallyHidden: React.FC = ({ children }) => (
  <span className="visually-hidden">{children}</span>
);
```

### Navegação por Teclado

```tsx
// hooks/useKeyboardNavigation.ts
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.altKey && e.key === 'm') {
        document.getElementById('main-content')?.focus();
      }
      
      // Open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openCommandPalette();
      }
      
      // Navigate between sections
      if (e.altKey) {
        switch(e.key) {
          case '1': focusSection('dashboard'); break;
          case '2': focusSection('courses'); break;
          case '3': focusSection('certificates'); break;
          case '4': focusSection('profile'); break;
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};
```

## Performance e Otimização

### Lazy Loading de Componentes

```tsx
// routes/LazyRoutes.tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Courses = lazy(() => import('./pages/Courses'));
const Certificate = lazy(() => import('./pages/Certificate'));

export const AppRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/certificate/:id" element={<Certificate />} />
    </Routes>
  </Suspense>
);
```

### Otimização de Imagens

```tsx
// components/OptimizedImage.tsx
export const OptimizedImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false
}) => {
  const { company } = useCompany();
  
  // Use CDN da empresa se disponível
  const imageSrc = company.cdnUrl 
    ? `${company.cdnUrl}/${src}`
    : src;
  
  return (
    <picture>
      <source
        srcSet={`${imageSrc}?w=${width}&f=webp`}
        type="image/webp"
      />
      <source
        srcSet={`${imageSrc}?w=${width}&f=jpg`}
        type="image/jpeg"
      />
      <img
        src={`${imageSrc}?w=${width}`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};
```

## Animações e Microinterações

### Transições Suaves

```scss
// styles/animations.scss
// Fade in animation
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

// Skeleton loading
@keyframes skeleton {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

// Success checkmark
@keyframes checkmark {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}

// Utility classes
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.skeleton-loading {
  background: linear-gradient(
    90deg,
    var(--gray-200) 0%,
    var(--gray-100) 50%,
    var(--gray-200) 100%
  );
  background-size: 200px 100%;
  animation: skeleton 1.2s ease-in-out infinite;
}
```

## Testes de Usabilidade

### Métricas de UX

```typescript
// analytics/ux-metrics.ts
interface UXMetrics {
  // Task Success Rate
  taskCompletion: {
    loginSuccess: number; // Target: >95%
    courseCompletion: number; // Target: >80%
    certificateDownload: number; // Target: >90%
  };
  
  // Time on Task
  averageTime: {
    toLogin: number; // Target: <30s
    toFindCourse: number; // Target: <1min
    toCompleteCourse: number; // Within expected duration
  };
  
  // Error Rate
  errors: {
    loginAttempts: number; // Target: <1.5
    navigationErrors: number; // Target: <5%
    formValidationErrors: number; // Target: <10%
  };
  
  // Satisfaction (SUS Score)
  satisfaction: {
    susScore: number; // Target: >68
    nps: number; // Target: >50
    csat: number; // Target: >4/5
  };
}
```

## Conclusão

Este guia de UI/UX garante que cada empresa tenha uma experiência personalizada mantendo a consistência funcional e a excelência em usabilidade. A customização respeita a identidade corporativa enquanto preserva os padrões de segurança e acessibilidade necessários para uma plataforma de treinamento em SST.