# SafetyCulture Features - Codebase Integration Roadmap

## Current Codebase Analysis

### Tech Stack Overview
- **Framework**: Next.js 15.5.1 with React 19.1.1
- **Database**: PostgreSQL with Drizzle ORM
- **AI Integration**: AI SDK with multiple providers (OpenAI, xAI)
- **UI Framework**: Tailwind CSS + Radix UI + Shadcn/ui
- **Authentication**: NextAuth 5.0 (beta)
- **File Storage**: Vercel Blob
- **PDF Generation**: React-PDF, jsPDF, html2canvas
- **Charts**: Recharts
- **State Management**: React hooks + SWR

### Current Application Structure

#### Pages Analysis
```
Protected Routes (/app/(protected)/):
├── inicio/ - Personal dashboard (training stats, progress, alerts)
├── assistente/ - AI chatbot interface  
├── cursos/ - Course management and enrollment
├── certificados/ - Certificate generation and management
├── relatorios/ - Basic reporting dashboard
├── equipe/ - Team management
├── documentos/ - Document management
├── comunidade/ - Community features
├── configuracoes/ - Settings
└── ajuda/ - Help section

Admin Routes (/app/admin/):
├── page.tsx - Company admin dashboard
├── usuarios/ - User management
├── treinamentos/ - Training administration
├── relatorios/ - Admin reports
├── configuracoes/ - Admin settings
└── [other admin features]

Landing (/app/(landing)/):
├── page.tsx - Public homepage
├── cursos-nr/ - Public course catalog
├── sobre/ - About page
└── planos/ - Pricing plans
```

#### Database Schema (Current)
```sql
-- Existing tables
User (id, email, password)
Chat (id, title, userId, visibility, lastContext)
Message (role, parts, attachments, chatId)
Document (id, title, content, kind, userId)
Vote (chatId, messageId, isUpvoted)
Suggestion (documentId, originalText, suggestedText)
Stream (id, chatId)
```

#### Key Components
- Training management system (courses, certificates)
- AI chatbot integration
- PDF certificate generation
- User dashboard with training statistics
- Admin panel for company management

## SafetyCulture Features Integration Plan

### Phase 1: Digital Inspection System (Months 1-3)

#### 1.1 Database Schema Extensions
```sql
-- New tables for inspection system
CREATE TABLE inspection_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  version INTEGER DEFAULT 1,
  created_by UUID REFERENCES "User"(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  template_data JSONB NOT NULL,
  settings JSONB,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE inspections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES inspection_templates(id),
  inspector_id UUID REFERENCES "User"(id),
  title VARCHAR(255),
  location_name VARCHAR(255),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'draft',
  responses JSONB NOT NULL,
  score DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE inspection_issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id UUID REFERENCES inspections(id),
  question_id VARCHAR(100),
  severity VARCHAR(20),
  description TEXT,
  photo_urls TEXT[],
  assigned_to UUID REFERENCES "User"(id),
  status VARCHAR(20) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT NOW(),
  resolved_at TIMESTAMP
);

CREATE TABLE inspection_workflows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES inspection_templates(id),
  name VARCHAR(255) NOT NULL,
  trigger_conditions JSONB,
  actions JSONB,
  enabled BOOLEAN DEFAULT TRUE
);
```

#### 1.2 New Routes to Add
```
/app/(protected)/inspecoes/
├── page.tsx - Inspection dashboard
├── nova/ - Create new inspection
├── templates/ - Template management
├── [id]/ - View/edit inspection
└── relatorios/ - Inspection reports

/app/admin/inspecoes/
├── page.tsx - Admin inspection overview
├── templates/ - Template administration
├── workflows/ - Workflow management
└── analytics/ - Inspection analytics
```

#### 1.3 UI Components to Create
```typescript
// Core inspection components
components/inspection/
├── InspectionForm.tsx - Mobile-optimized form
├── TemplateBuilder.tsx - Drag-and-drop template creator
├── QuestionComponents/ - Question type components
├── PhotoCapture.tsx - Camera integration
├── LocationPicker.tsx - GPS location capture
├── OfflineSync.tsx - Offline data management
└── WorkflowEngine.tsx - Automated actions

// Template question types
├── TextQuestion.tsx
├── NumberQuestion.tsx
├── BooleanQuestion.tsx
├── MultipleChoiceQuestion.tsx
├── PhotoQuestion.tsx
├── SignatureQuestion.tsx
├── DateQuestion.tsx
└── BarcodeQuestion.tsx
```

#### 1.4 Integration Points
- **Existing sidebar**: Add "Inspeções" menu item
- **Admin dashboard**: Add inspection metrics cards
- **User dashboard**: Add inspection progress widgets
- **Document system**: Integrate inspection reports
- **AI assistant**: Add inspection guidance capabilities

### Phase 2: Enhanced Analytics & Real-Time Features (Months 4-6)

#### 2.1 Database Extensions for Analytics
```sql
-- Time-series metrics storage
CREATE TABLE metrics (
  timestamp TIMESTAMPTZ NOT NULL,
  metric_name VARCHAR(255) NOT NULL,
  value DOUBLE PRECISION NOT NULL,
  tags JSONB,
  user_id UUID REFERENCES "User"(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pre-computed aggregations
CREATE TABLE metric_aggregations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name VARCHAR(255) NOT NULL,
  aggregation_type VARCHAR(50) NOT NULL,
  time_bucket INTERVAL NOT NULL,
  bucket_start TIMESTAMPTZ NOT NULL,
  value DOUBLE PRECISION NOT NULL,
  tags JSONB,
  computed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Alert system
CREATE TABLE alert_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  condition JSONB NOT NULL,
  actions JSONB NOT NULL,
  enabled BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES "User"(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE alert_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rule_id UUID REFERENCES alert_rules(id),
  triggered_at TIMESTAMPTZ NOT NULL,
  resolved_at TIMESTAMPTZ,
  severity VARCHAR(20),
  event_data JSONB,
  actions_taken JSONB,
  status VARCHAR(20) DEFAULT 'active'
);
```

#### 2.2 Enhanced Routes
```
/app/(protected)/analytics/
├── page.tsx - Personal analytics dashboard
├── inspections/ - Inspection analytics
├── training/ - Training analytics
└── compliance/ - Compliance tracking

/app/admin/analytics/
├── page.tsx - Company-wide analytics
├── dashboards/ - Custom dashboard builder
├── alerts/ - Alert management
└── reports/ - Advanced reporting
```

#### 2.3 Real-Time Components
```typescript
components/analytics/
├── RealTimeDashboard.tsx - WebSocket-enabled dashboard
├── KPICards.tsx - Live metric cards
├── TrendCharts.tsx - Time-series visualizations
├── AlertManager.tsx - Alert configuration
├── CustomDashboardBuilder.tsx - Drag-and-drop builder
└── ReportGenerator.tsx - Automated reports

// WebSocket integration
lib/websocket/
├── client.ts - WebSocket client setup
├── events.ts - Event definitions
└── handlers.ts - Event handlers
```

#### 2.4 Integration with Existing Features
- **Enhanced relatorios page**: Add real-time capabilities
- **Admin dashboard**: Replace static metrics with live data
- **User dashboard**: Add real-time progress tracking
- **Course system**: Track engagement metrics

### Phase 3: AI-Powered Training Enhancement (Months 7-9)

#### 3.1 Database Extensions for AI Training
```sql
-- AI-generated content tracking
CREATE TABLE ai_content_generation (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_document_id UUID REFERENCES "Document"(id),
  generated_content JSONB NOT NULL,
  generation_type VARCHAR(50), -- 'course', 'quiz', 'narration'
  ai_model VARCHAR(100),
  generation_params JSONB,
  quality_score DECIMAL(3,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enhanced course structure
CREATE TABLE course_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id VARCHAR(255) NOT NULL, -- Link to existing course system
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content JSONB NOT NULL,
  order_index INTEGER,
  estimated_duration INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE micro_lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES course_modules(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  media_url VARCHAR(500),
  duration INTEGER,
  learning_objective TEXT,
  order_index INTEGER,
  key_takeaways TEXT[]
);

-- Spaced repetition system
CREATE TABLE repetition_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES "User"(id),
  lesson_id UUID REFERENCES micro_lessons(id),
  scheduled_date TIMESTAMP NOT NULL,
  difficulty DECIMAL(3,2),
  repetition_number INTEGER,
  completed_at TIMESTAMP,
  success_rate DECIMAL(5,2)
);

-- Enhanced quiz system
CREATE TABLE quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES course_modules(id),
  title VARCHAR(255) NOT NULL,
  instructions TEXT,
  passing_score INTEGER,
  time_limit INTEGER,
  max_attempts INTEGER,
  questions JSONB NOT NULL
);

CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES "User"(id),
  quiz_id UUID REFERENCES quizzes(id),
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  score DECIMAL(5,2),
  answers JSONB,
  passed BOOLEAN,
  attempt_number INTEGER
);
```

#### 3.2 AI Integration Routes
```
/app/(protected)/cursos/
├── [existing structure]
├── ai-creator/ - AI content creation interface
├── microlearning/ - Microlearning sessions
└── progress-analytics/ - Enhanced progress tracking

/app/admin/ai-training/
├── page.tsx - AI training administration
├── content-generator/ - Bulk content generation
├── analytics/ - Training effectiveness analytics
└── spaced-repetition/ - Repetition schedule management
```

#### 3.3 AI-Enhanced Components
```typescript
components/ai-training/
├── DocumentToCourseConverter.tsx - Upload & convert documents
├── MicrolearningInterface.tsx - Bite-sized learning
├── SpacedRepetitionScheduler.tsx - Intelligent scheduling
├── AIQuizGenerator.tsx - Automated quiz creation
├── ProgressAnalytics.tsx - Learning analytics
├── VoiceNarrationPlayer.tsx - AI-generated audio
└── AdaptiveLearningPath.tsx - Personalized learning

// AI service integration
lib/ai/training/
├── content-generator.ts - AI content creation
├── quiz-generator.ts - Quiz automation
├── voice-synthesis.ts - Text-to-speech
├── learning-analytics.ts - Progress analysis
└── spaced-repetition.ts - Repetition algorithms
```

#### 3.4 Integration with Existing Course System
- **Enhanced cursos page**: Add AI-generated content options
- **Certificate system**: Track micro-achievements
- **User dashboard**: Show spaced repetition reminders
- **AI assistant**: Provide learning recommendations

### Phase 4: Advanced Compliance & Asset Management (Months 10-12)

#### 4.1 Database Extensions for Compliance
```sql
-- Asset management
CREATE TABLE assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  location VARCHAR(255),
  serial_number VARCHAR(100),
  purchase_date DATE,
  maintenance_schedule JSONB,
  assigned_to UUID REFERENCES "User"(id),
  status VARCHAR(50) DEFAULT 'active',
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE asset_inspections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID REFERENCES assets(id),
  inspection_id UUID REFERENCES inspections(id),
  findings JSONB,
  action_required BOOLEAN DEFAULT FALSE,
  next_inspection_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Compliance tracking
CREATE TABLE compliance_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(100), -- 'training', 'inspection', 'certification'
  frequency INTERVAL,
  applicable_roles TEXT[],
  regulatory_body VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE compliance_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES "User"(id),
  requirement_id UUID REFERENCES compliance_requirements(id),
  status VARCHAR(50), -- 'compliant', 'non_compliant', 'expiring'
  last_completed DATE,
  expiry_date DATE,
  next_due_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Incident tracking
CREATE TABLE incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  severity VARCHAR(50),
  type VARCHAR(100),
  location VARCHAR(255),
  reported_by UUID REFERENCES "User"(id),
  assigned_to UUID REFERENCES "User"(id),
  status VARCHAR(50) DEFAULT 'open',
  root_cause TEXT,
  corrective_actions TEXT,
  occurred_at TIMESTAMP,
  reported_at TIMESTAMP DEFAULT NOW(),
  resolved_at TIMESTAMP
);
```

#### 4.2 Compliance & Asset Routes
```
/app/(protected)/compliance/
├── page.tsx - Personal compliance dashboard
├── requirements/ - Required training/certifications
├── calendar/ - Compliance calendar
└── history/ - Compliance history

/app/(protected)/assets/
├── page.tsx - Asset overview
├── inspections/ - Asset inspection schedule
├── maintenance/ - Maintenance tracking
└── reports/ - Asset reports

/app/admin/compliance/
├── page.tsx - Company compliance overview
├── requirements/ - Manage requirements
├── tracking/ - Compliance tracking
├── incidents/ - Incident management
└── audits/ - Audit preparation

/app/admin/assets/
├── page.tsx - Asset management
├── categories/ - Asset categories
├── maintenance/ - Maintenance scheduling
└── analytics/ - Asset analytics
```

#### 4.3 Advanced Management Components
```typescript
components/compliance/
├── ComplianceCalendar.tsx - Calendar view
├── RequirementTracker.tsx - Requirement tracking
├── ExpiryAlerts.tsx - Expiry notifications
├── AuditPreparation.tsx - Audit tools
└── IncidentReporting.tsx - Incident forms

components/assets/
├── AssetRegistry.tsx - Asset database
├── MaintenanceScheduler.tsx - Maintenance planning
├── InspectionPlanner.tsx - Inspection scheduling
├── AssetAnalytics.tsx - Asset performance
└── QRCodeGenerator.tsx - Asset labeling
```

## Implementation Strategy

### 1. Leverage Existing Architecture
- **Build on current route structure**: Extend `/app/(protected)/` and `/app/admin/`
- **Use existing UI components**: Leverage shadcn/ui components
- **Extend database schema**: Add new tables without breaking existing
- **Integrate with current auth**: Use existing NextAuth setup

### 2. Progressive Enhancement
- **Phase-by-phase rollout**: Implement features incrementally
- **Feature flags**: Use environment variables for feature toggles
- **Backward compatibility**: Ensure existing features continue working
- **User migration**: Smooth transition for existing users

### 3. Integration Points Summary

#### Navigation Integration
```typescript
// Update components/protected-sidebar.tsx
const menuItems = [
  // ... existing items
  {
    title: 'Inspeções',
    icon: ClipboardCheck,
    href: '/inspecoes',
  },
  {
    title: 'Compliance',
    icon: Shield,
    href: '/compliance',
  },
  {
    title: 'Ativos',
    icon: Package,
    href: '/assets',
  },
];

const adminItems = [
  // ... existing items
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    title: 'Inspeções Admin',
    icon: ClipboardCheck,
    href: '/admin/inspecoes',
  },
];
```

#### Dashboard Integration
```typescript
// Update app/(protected)/inicio/page.tsx
const userStats = [
  // ... existing stats
  {
    title: 'Inspeções Pendentes',
    value: '3',
    change: '+1 hoje',
    icon: ClipboardCheck,
    trend: 'up',
  },
  {
    title: 'Status Compliance',
    value: '95%',
    change: '+2% este mês',
    icon: Shield,
    trend: 'up',
  },
];
```

### 4. Technology Decisions

#### Database Strategy
- **Extend current Drizzle schema**: Add new tables incrementally
- **Use JSONB for flexibility**: Store complex data structures
- **Create indexes for performance**: Optimize for common queries
- **Maintain referential integrity**: Link to existing User table

#### API Strategy
- **Follow existing patterns**: Use app router API routes
- **Implement middleware**: Add authentication/authorization
- **Add validation**: Use Zod for request/response validation
- **Error handling**: Consistent error responses

#### UI Strategy
- **Extend current design system**: Use existing Tailwind/Radix components
- **Mobile-first approach**: Responsive design for inspections
- **Progressive Web App**: Offline capabilities for inspections
- **Accessibility**: WCAG compliance

### 5. Migration Path

#### Phase 1 Prerequisites
1. Update database schema with new tables
2. Create basic inspection components
3. Add new navigation items
4. Implement basic CRUD operations

#### Phase 2 Prerequisites
1. Set up WebSocket infrastructure
2. Implement time-series data collection
3. Create analytics components
4. Add real-time features

#### Phase 3 Prerequisites
1. Integrate AI services
2. Enhance course system
3. Implement microlearning
4. Add spaced repetition

#### Phase 4 Prerequisites
1. Complete asset management system
2. Implement compliance tracking
3. Add incident management
4. Create audit tools

## Next Steps

### Immediate Actions (Week 1)
1. **Database Migration**: Create initial inspection tables
2. **Basic Components**: Start with inspection form components
3. **Navigation Update**: Add inspection menu items
4. **API Routes**: Create basic CRUD endpoints

### Week 2-4 Actions
1. **Template Builder**: Implement drag-and-drop interface
2. **Mobile Optimization**: Ensure mobile-first design
3. **Photo Integration**: Add camera capture capabilities
4. **Offline Support**: Implement service worker

### Month 2 Actions
1. **Workflow Engine**: Add automated actions
2. **Integration Testing**: Ensure compatibility
3. **User Training**: Prepare documentation
4. **Performance Testing**: Optimize for scale

This roadmap provides a structured approach to integrating SafetyCulture features while leveraging your existing codebase architecture and maintaining system stability.