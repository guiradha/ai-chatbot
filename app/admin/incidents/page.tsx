'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle,
  Plus,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function IncidentsPage() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Incidentes</h1>
          <p className="text-muted-foreground">
            Registros de incidentes e ocorrências de segurança
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Reportar Incidente
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Incidentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -15% este mês
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Abertos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Requerem atenção</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Resolvidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2h</div>
              <p className="text-xs text-muted-foreground">Para resolução</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle>Incidentes Recentes</CardTitle>
            <CardDescription>Últimos incidentes reportados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  id: 'INC-2024-023',
                  title: 'Vazamento de produto químico - Área 3',
                  severity: 'high',
                  status: 'open',
                  time: '2 horas atrás'
                },
                { 
                  id: 'INC-2024-022',
                  title: 'Queda de altura - Setor B',
                  severity: 'medium',
                  status: 'in_progress',
                  time: '5 horas atrás'
                },
                { 
                  id: 'INC-2024-021',
                  title: 'EPI danificado - Operador João Silva',
                  severity: 'low',
                  status: 'resolved',
                  time: '1 dia atrás'
                },
              ].map((incident, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      incident.severity === 'high' ? 'text-red-600' :
                      incident.severity === 'medium' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`} />
                    <div>
                      <p className="font-medium">{incident.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-xs bg-muted px-2 py-0.5 rounded">
                          {incident.id}
                        </code>
                        <span className="text-xs text-muted-foreground">• {incident.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      incident.status === 'open' ? 'destructive' :
                      incident.status === 'in_progress' ? 'default' :
                      'secondary'
                    }>
                      {incident.status === 'open' ? 'Aberto' :
                       incident.status === 'in_progress' ? 'Em Progresso' :
                       'Resolvido'}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}