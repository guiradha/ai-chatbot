# Real-Time Analytics Dashboard Implementation Guide

## Overview

This document outlines the implementation of a comprehensive analytics and reporting system inspired by SafetyCulture's data visualization and insights platform.

## Core Analytics Features

### 1. Real-Time Data Processing

#### Event-Driven Architecture:
```typescript
interface AnalyticsEvent {
  id: string;
  type: EventType;
  timestamp: Date;
  userId: string;
  sessionId: string;
  data: Record<string, any>;
  metadata: EventMetadata;
}

enum EventType {
  INSPECTION_STARTED = 'inspection_started',
  INSPECTION_COMPLETED = 'inspection_completed',
  QUESTION_ANSWERED = 'question_answered',
  ISSUE_IDENTIFIED = 'issue_identified',
  TRAINING_STARTED = 'training_started',
  TRAINING_COMPLETED = 'training_completed',
  LESSON_COMPLETED = 'lesson_completed',
  QUIZ_ATTEMPTED = 'quiz_attempted',
  USER_LOGIN = 'user_login',
  TEMPLATE_USED = 'template_used'
}

interface EventMetadata {
  source: string;
  version: string;
  deviceType: string;
  location?: GeoLocation;
  userAgent?: string;
}
```

#### Real-Time Processing Pipeline:
```typescript
class AnalyticsProcessor {
  private eventQueue: Queue<AnalyticsEvent>;
  private aggregationEngine: AggregationEngine;
  private alertEngine: AlertEngine;
  
  async processEvent(event: AnalyticsEvent): Promise<void> {
    // 1. Validate and enrich event
    const enrichedEvent = await this.enrichEvent(event);
    
    // 2. Store raw event
    await this.storeEvent(enrichedEvent);
    
    // 3. Update real-time aggregations
    await this.updateAggregations(enrichedEvent);
    
    // 4. Check for alerts
    await this.checkAlerts(enrichedEvent);
    
    // 5. Broadcast to connected dashboards
    await this.broadcastUpdate(enrichedEvent);
  }
  
  private async updateAggregations(event: AnalyticsEvent): Promise<void> {
    const aggregations = this.getApplicableAggregations(event);
    
    await Promise.all(
      aggregations.map(agg => this.aggregationEngine.update(agg, event))
    );
  }
}
```

### 2. Dashboard Data Models

#### Key Performance Indicators:
```typescript
interface KPIMetric {
  id: string;
  name: string;
  description: string;
  value: number;
  previousValue: number;
  change: number;
  changePercent: number;
  trend: TrendDirection;
  target?: number;
  unit: string;
  category: MetricCategory;
  lastUpdated: Date;
}

enum MetricCategory {
  SAFETY = 'safety',
  COMPLIANCE = 'compliance',
  QUALITY = 'quality',
  EFFICIENCY = 'efficiency',
  TRAINING = 'training'
}

interface DashboardWidget {
  id: string;
  type: WidgetType;
  title: string;
  description?: string;
  position: WidgetPosition;
  size: WidgetSize;
  configuration: WidgetConfig;
  dataSource: DataSource;
  refreshInterval: number;
}

enum WidgetType {
  KPI_CARD = 'kpi_card',
  LINE_CHART = 'line_chart',
  BAR_CHART = 'bar_chart',
  PIE_CHART = 'pie_chart',
  HEAT_MAP = 'heat_map',
  TREND_ANALYSIS = 'trend_analysis',
  ISSUE_TRACKER = 'issue_tracker',
  RECENT_ACTIVITY = 'recent_activity'
}
```

#### Dashboard Configuration:
```typescript
interface Dashboard {
  id: string;
  name: string;
  description: string;
  category: DashboardCategory;
  widgets: DashboardWidget[];
  filters: DashboardFilter[];
  permissions: DashboardPermission[];
  isDefault: boolean;
  createdBy: string;
  createdAt: Date;
  lastModified: Date;
}

interface DashboardFilter {
  id: string;
  name: string;
  type: FilterType;
  options: FilterOption[];
  defaultValue?: any;
  required: boolean;
}

enum FilterType {
  DATE_RANGE = 'date_range',
  LOCATION = 'location',
  DEPARTMENT = 'department',
  USER = 'user',
  TEMPLATE = 'template',
  CATEGORY = 'category'
}
```

### 3. Advanced Analytics Queries

#### Inspection Analytics:
```typescript
class InspectionAnalytics {
  async getComplianceScore(filters: AnalyticsFilters): Promise<ComplianceMetrics> {
    const inspections = await this.getFilteredInspections(filters);
    
    return {
      overallScore: this.calculateOverallScore(inspections),
      departmentScores: this.calculateDepartmentScores(inspections),
      trendData: await this.calculateTrends(inspections, filters.dateRange),
      topIssues: this.identifyTopIssues(inspections),
      improvementAreas: this.identifyImprovementAreas(inspections)
    };
  }
  
  async getInspectionTrends(filters: AnalyticsFilters): Promise<TrendData[]> {
    const query = `
      SELECT 
        DATE_TRUNC('day', completed_at) as date,
        COUNT(*) as total_inspections,
        AVG(score) as average_score,
        COUNT(CASE WHEN score >= 80 THEN 1 END) as passing_inspections
      FROM inspections 
      WHERE completed_at BETWEEN $1 AND $2
      GROUP BY DATE_TRUNC('day', completed_at)
      ORDER BY date
    `;
    
    return await this.database.query(query, [filters.startDate, filters.endDate]);
  }
  
  async getIssueAnalytics(filters: AnalyticsFilters): Promise<IssueAnalytics> {
    return {
      totalIssues: await this.getTotalIssues(filters),
      issuesByCategory: await this.getIssuesByCategory(filters),
      resolutionTimes: await this.getResolutionTimes(filters),
      recurringIssues: await this.getRecurringIssues(filters),
      severityDistribution: await this.getSeverityDistribution(filters)
    };
  }
}
```

#### Training Analytics:
```typescript
class TrainingAnalytics {
  async getLearningMetrics(filters: AnalyticsFilters): Promise<LearningMetrics> {
    return {
      courseCompletionRates: await this.getCourseCompletionRates(filters),
      averageScores: await this.getAverageScores(filters),
      timeToCompletion: await this.getTimeToCompletion(filters),
      engagementMetrics: await this.getEngagementMetrics(filters),
      skillProgressions: await this.getSkillProgressions(filters)
    };
  }
  
  async getTrainingEffectiveness(filters: AnalyticsFilters): Promise<EffectivenessMetrics> {
    const preTrainingData = await this.getPreTrainingMetrics(filters);
    const postTrainingData = await this.getPostTrainingMetrics(filters);
    
    return {
      performanceImprovement: this.calculateImprovement(preTrainingData, postTrainingData),
      knowledgeRetention: await this.calculateRetention(filters),
      behaviorChange: await this.measureBehaviorChange(filters),
      incidentReduction: await this.calculateIncidentReduction(filters)
    };
  }
}
```

### 4. Real-Time Alerting System

#### Alert Configuration:
```typescript
interface AlertRule {
  id: string;
  name: string;
  description: string;
  condition: AlertCondition;
  actions: AlertAction[];
  enabled: boolean;
  severity: AlertSeverity;
  cooldownPeriod: number;
  recipients: AlertRecipient[];
}

interface AlertCondition {
  metric: string;
  operator: ComparisonOperator;
  threshold: number;
  timeWindow: number;
  aggregation: AggregationType;
  filters?: Record<string, any>;
}

enum AlertSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

interface AlertAction {
  type: AlertActionType;
  configuration: ActionConfiguration;
}

enum AlertActionType {
  EMAIL = 'email',
  SMS = 'sms',
  SLACK = 'slack',
  WEBHOOK = 'webhook',
  MOBILE_PUSH = 'mobile_push'
}
```

#### Alert Processing Engine:
```typescript
class AlertEngine {
  private activeAlerts: Map<string, ActiveAlert> = new Map();
  
  async evaluateRules(event: AnalyticsEvent): Promise<void> {
    const applicableRules = await this.getApplicableRules(event);
    
    for (const rule of applicableRules) {
      const shouldTrigger = await this.evaluateCondition(rule.condition, event);
      
      if (shouldTrigger) {
        await this.triggerAlert(rule, event);
      }
    }
  }
  
  private async evaluateCondition(condition: AlertCondition, event: AnalyticsEvent): Promise<boolean> {
    const metricValue = await this.getMetricValue(condition, event);
    
    switch (condition.operator) {
      case 'greater_than':
        return metricValue > condition.threshold;
      case 'less_than':
        return metricValue < condition.threshold;
      case 'equals':
        return metricValue === condition.threshold;
      default:
        return false;
    }
  }
  
  private async triggerAlert(rule: AlertRule, event: AnalyticsEvent): Promise<void> {
    const alertId = `${rule.id}-${Date.now()}`;
    
    if (this.isInCooldown(rule.id)) {
      return;
    }
    
    const alert: ActiveAlert = {
      id: alertId,
      ruleId: rule.id,
      severity: rule.severity,
      triggeredAt: new Date(),
      event: event,
      status: AlertStatus.ACTIVE
    };
    
    this.activeAlerts.set(alertId, alert);
    
    // Execute alert actions
    await Promise.all(
      rule.actions.map(action => this.executeAction(action, alert))
    );
    
    // Set cooldown
    this.setCooldown(rule.id, rule.cooldownPeriod);
  }
}
```

## Technical Implementation

### 1. Data Pipeline Architecture

#### Stream Processing:
```typescript
// Apache Kafka-like message processing
class EventStreamProcessor {
  private consumers: Map<string, EventConsumer> = new Map();
  
  async startProcessing(): Promise<void> {
    // Real-time aggregation consumer
    this.consumers.set('aggregation', new AggregationConsumer());
    
    // Alert processing consumer
    this.consumers.set('alerts', new AlertConsumer());
    
    // Dashboard update consumer
    this.consumers.set('dashboard', new DashboardConsumer());
    
    await Promise.all(
      Array.from(this.consumers.values()).map(consumer => consumer.start())
    );
  }
}

// Time-series database for analytics
class TimeSeriesDB {
  async writeMetric(metric: MetricPoint): Promise<void> {
    const query = `
      INSERT INTO metrics (timestamp, metric_name, value, tags)
      VALUES ($1, $2, $3, $4)
    `;
    
    await this.connection.query(query, [
      metric.timestamp,
      metric.name,
      metric.value,
      JSON.stringify(metric.tags)
    ]);
  }
  
  async queryMetrics(query: MetricsQuery): Promise<MetricPoint[]> {
    const sql = this.buildTimeSeriesQuery(query);
    return await this.connection.query(sql, query.parameters);
  }
}
```

### 2. Database Schema for Analytics

```sql
-- Time-series metrics storage
CREATE TABLE metrics (
  timestamp TIMESTAMPTZ NOT NULL,
  metric_name VARCHAR(255) NOT NULL,
  value DOUBLE PRECISION NOT NULL,
  tags JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create hypertable for time-series data (TimescaleDB)
SELECT create_hypertable('metrics', 'timestamp');

-- Pre-computed aggregations
CREATE TABLE metric_aggregations (
  id UUID PRIMARY KEY,
  metric_name VARCHAR(255) NOT NULL,
  aggregation_type aggregation_type_enum NOT NULL,
  time_bucket INTERVAL NOT NULL,
  bucket_start TIMESTAMPTZ NOT NULL,
  value DOUBLE PRECISION NOT NULL,
  tags JSONB,
  computed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Dashboard configurations
CREATE TABLE dashboards (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category dashboard_category_enum,
  widgets JSONB NOT NULL,
  filters JSONB,
  permissions JSONB,
  is_default BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Alert rules and history
CREATE TABLE alert_rules (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  condition JSONB NOT NULL,
  actions JSONB NOT NULL,
  enabled BOOLEAN DEFAULT TRUE,
  severity alert_severity_enum,
  cooldown_period INTEGER,
  recipients JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE alert_history (
  id UUID PRIMARY KEY,
  rule_id UUID REFERENCES alert_rules(id),
  triggered_at TIMESTAMPTZ NOT NULL,
  resolved_at TIMESTAMPTZ,
  severity alert_severity_enum,
  event_data JSONB,
  actions_taken JSONB,
  status alert_status_enum
);
```

### 3. API Endpoints

```typescript
// Analytics API routes
app.get('/api/analytics/kpis', async (req, res) => {
  const filters = parseFilters(req.query);
  const kpis = await analyticsService.getKPIs(filters);
  res.json(kpis);
});

app.get('/api/analytics/trends/:metric', async (req, res) => {
  const { metric } = req.params;
  const filters = parseFilters(req.query);
  const trends = await analyticsService.getTrends(metric, filters);
  res.json(trends);
});

app.get('/api/analytics/inspections/summary', async (req, res) => {
  const filters = parseFilters(req.query);
  const summary = await inspectionAnalytics.getSummary(filters);
  res.json(summary);
});

app.get('/api/analytics/training/effectiveness', async (req, res) => {
  const filters = parseFilters(req.query);
  const effectiveness = await trainingAnalytics.getEffectiveness(filters);
  res.json(effectiveness);
});

// Real-time dashboard updates via WebSocket
io.on('connection', (socket) => {
  socket.on('subscribe_dashboard', (dashboardId) => {
    socket.join(`dashboard_${dashboardId}`);
  });
  
  socket.on('subscribe_alerts', (userId) => {
    socket.join(`alerts_${userId}`);
  });
});
```

### 4. Frontend Dashboard Components

#### React Dashboard Framework:
```tsx
const AnalyticsDashboard: React.FC<DashboardProps> = ({ dashboardId }) => {
  const [dashboard, setDashboard] = useState<Dashboard>();
  const [data, setData] = useState<DashboardData>();
  const [filters, setFilters] = useState<DashboardFilters>({});
  
  useEffect(() => {
    // Subscribe to real-time updates
    const socket = io();
    socket.emit('subscribe_dashboard', dashboardId);
    
    socket.on('dashboard_update', (update) => {
      setData(prevData => ({ ...prevData, ...update }));
    });
    
    return () => socket.disconnect();
  }, [dashboardId]);
  
  return (
    <div className="analytics-dashboard">
      <DashboardHeader 
        title={dashboard?.name}
        filters={filters}
        onFiltersChange={setFilters}
      />
      <DashboardGrid>
        {dashboard?.widgets.map(widget => (
          <WidgetRenderer 
            key={widget.id}
            widget={widget}
            data={data?.[widget.id]}
            filters={filters}
          />
        ))}
      </DashboardGrid>
    </div>
  );
};

const KPIWidget: React.FC<KPIWidgetProps> = ({ metric, config }) => {
  const trendColor = metric.change >= 0 ? 'green' : 'red';
  const trendIcon = metric.change >= 0 ? '↗' : '↘';
  
  return (
    <div className="kpi-widget">
      <div className="kpi-header">
        <h3>{metric.name}</h3>
        <span className="kpi-category">{metric.category}</span>
      </div>
      <div className="kpi-value">
        <span className="value">{metric.value}</span>
        <span className="unit">{metric.unit}</span>
      </div>
      <div className="kpi-trend" style={{ color: trendColor }}>
        <span className="trend-icon">{trendIcon}</span>
        <span className="trend-value">{Math.abs(metric.changePercent)}%</span>
        <span className="trend-period">vs previous period</span>
      </div>
      {metric.target && (
        <div className="kpi-target">
          Target: {metric.target} {metric.unit}
        </div>
      )}
    </div>
  );
};

const TrendChart: React.FC<TrendChartProps> = ({ data, config }) => {
  return (
    <div className="trend-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8884d8" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
```

## Implementation Roadmap

### Phase 1: Core Analytics Infrastructure (Weeks 1-4)
- [ ] Event collection and storage system
- [ ] Basic metric calculation engine
- [ ] Time-series database setup
- [ ] Simple dashboard framework

### Phase 2: Real-Time Processing (Weeks 5-8)
- [ ] Stream processing pipeline
- [ ] Real-time aggregations
- [ ] WebSocket-based updates
- [ ] Basic alerting system

### Phase 3: Advanced Dashboards (Weeks 9-12)
- [ ] Interactive dashboard builder
- [ ] Advanced visualizations
- [ ] Custom metric definitions
- [ ] Drill-down capabilities

### Phase 4: Intelligence and Insights (Weeks 13-16)
- [ ] Predictive analytics
- [ ] Anomaly detection
- [ ] Automated insights
- [ ] Recommendation engine

## Performance Considerations

### Data Storage Optimization:
- Time-series database partitioning
- Data retention policies
- Compression strategies
- Indexing optimization

### Real-Time Processing:
- Message queue optimization
- Parallel processing
- Caching strategies
- Load balancing

### Dashboard Performance:
- Data pre-aggregation
- Client-side caching
- Lazy loading
- Progressive data loading

This analytics implementation will provide comprehensive real-time insights, automated alerting, and powerful visualization capabilities to compete with SafetyCulture's analytics platform while offering advanced AI-powered insights.