'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Building2,
  Mail,
  Bell,
  Shield,
  Globe,
  Database,
  Key,
  Users,
  Settings,
  Save,
  AlertTriangle,
  Check,
  Info,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
} from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    certificateExpiry: true,
    newTraining: false,
    systemUpdates: true,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    ipRestriction: false,
  });

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">
            Gerencie as configurações do sistema e da empresa
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="company" className="space-y-4">
        <TabsList className="grid w-full max-w-2xl grid-cols-5">
          <TabsTrigger value="company">Empresa</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="system">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Atualize os dados cadastrais da empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input
                    id="company-name"
                    defaultValue="São e Salvo Treinamentos"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Corporativo</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="contato@saoesalvo.com.br"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 3456-7890" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="address">Endereço Completo</Label>
                <Textarea
                  id="address"
                  defaultValue="Av. Paulista, 1234 - São Paulo, SP - CEP: 01310-100"
                  rows={2}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Configurações de Marca</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo da Empresa</Label>
                    <Input id="logo" type="file" accept="image/*" />
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG até 5MB
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Cor Principal</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary-color"
                        type="color"
                        defaultValue="#0063F3"
                        className="w-20 h-10"
                      />
                      <Input defaultValue="#0063F3" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Configure como e quando receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">
                      Notificações por Email
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receba atualizações importantes por email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">
                      Notificações Push
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações no navegador
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="certificate-expiry">
                      Vencimento de Certificados
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Alertas sobre certificados próximos ao vencimento
                    </p>
                  </div>
                  <Switch
                    id="certificate-expiry"
                    checked={notifications.certificateExpiry}
                    onCheckedChange={(checked) =>
                      setNotifications({
                        ...notifications,
                        certificateExpiry: checked,
                      })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-training">Novos Treinamentos</Label>
                    <p className="text-sm text-muted-foreground">
                      Seja notificado sobre novos cursos disponíveis
                    </p>
                  </div>
                  <Switch
                    id="new-training"
                    checked={notifications.newTraining}
                    onCheckedChange={(checked) =>
                      setNotifications({
                        ...notifications,
                        newTraining: checked,
                      })
                    }
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">
                  Configurações de Alertas
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="alert-before">
                      Alertar antes do vencimento
                    </Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="alert-before">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 dias</SelectItem>
                        <SelectItem value="15">15 dias</SelectItem>
                        <SelectItem value="30">30 dias</SelectItem>
                        <SelectItem value="60">60 dias</SelectItem>
                        <SelectItem value="90">90 dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alert-frequency">
                      Frequência de lembretes
                    </Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="alert-frequency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Diário</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="biweekly">Quinzenal</SelectItem>
                        <SelectItem value="monthly">Mensal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Segurança</CardTitle>
              <CardDescription>
                Proteja sua conta e dados da empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">
                      Autenticação de Dois Fatores
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Adicione uma camada extra de segurança
                    </p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={security.twoFactor}
                    onCheckedChange={(checked) =>
                      setSecurity({ ...security, twoFactor: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">
                      Timeout de Sessão (minutos)
                    </Label>
                    <Select
                      value={security.sessionTimeout}
                      onValueChange={(value) =>
                        setSecurity({ ...security, sessionTimeout: value })
                      }
                    >
                      <SelectTrigger id="session-timeout">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">
                      Expiração de Senha (dias)
                    </Label>
                    <Select
                      value={security.passwordExpiry}
                      onValueChange={(value) =>
                        setSecurity({ ...security, passwordExpiry: value })
                      }
                    >
                      <SelectTrigger id="password-expiry">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 dias</SelectItem>
                        <SelectItem value="60">60 dias</SelectItem>
                        <SelectItem value="90">90 dias</SelectItem>
                        <SelectItem value="180">180 dias</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ip-restriction">Restrição por IP</Label>
                    <p className="text-sm text-muted-foreground">
                      Limite o acesso a IPs específicos
                    </p>
                  </div>
                  <Switch
                    id="ip-restriction"
                    checked={security.ipRestriction}
                    onCheckedChange={(checked) =>
                      setSecurity({ ...security, ipRestriction: checked })
                    }
                  />
                </div>

                {security.ipRestriction && (
                  <div className="space-y-2">
                    <Label htmlFor="allowed-ips">IPs Permitidos</Label>
                    <Textarea
                      id="allowed-ips"
                      placeholder="Digite um IP por linha"
                      rows={4}
                    />
                  </div>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Política de Senha</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Mínimo 8 caracteres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Pelo menos uma letra maiúscula
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Pelo menos um número</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Pelo menos um caractere especial
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>
                Conecte com outros sistemas e ferramentas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: 'Google Workspace',
                  description: 'Sincronize usuários e calendários',
                  icon: Globe,
                  connected: true,
                },
                {
                  name: 'Microsoft Teams',
                  description: 'Integração com videoconferências',
                  icon: Users,
                  connected: false,
                },
                {
                  name: 'Slack',
                  description: 'Notificações e alertas',
                  icon: Bell,
                  connected: false,
                },
                {
                  name: 'SAP',
                  description: 'Integração com RH',
                  icon: Database,
                  connected: true,
                },
              ].map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <integration.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{integration.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  {integration.connected ? (
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  ) : (
                    <Button size="sm">Conectar</Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Gerencie chaves de API para integrações customizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                  <div>
                    <p className="font-mono text-sm">
                      sk_live_******************************
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Criada em 15/01/2024 • Última vez usada: 2h atrás
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Revogar
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  <Key className="mr-2 h-4 w-4" />
                  Gerar Nova Chave
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>
                Configurações gerais e manutenção
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Select defaultValue="america-sao-paulo">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-sao-paulo">
                        América/São Paulo (GMT-3)
                      </SelectItem>
                      <SelectItem value="america-manaus">
                        América/Manaus (GMT-4)
                      </SelectItem>
                      <SelectItem value="america-fortaleza">
                        América/Fortaleza (GMT-3)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select defaultValue="pt-BR">
                    <SelectTrigger id="language">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (BR)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es-ES">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Backup e Recuperação</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Backup Automático
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Último: 15/03/2024 02:00
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Backup Manual</p>
                          <p className="text-xs text-muted-foreground">
                            Faça backup agora
                          </p>
                        </div>
                        <Button size="sm">Executar</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Logs do Sistema</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Info className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-sm">Atualização do sistema</p>
                        <p className="text-xs text-muted-foreground">
                          15/03/2024 10:30
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600" />
                      <div>
                        <p className="text-sm">Backup concluído</p>
                        <p className="text-xs text-muted-foreground">
                          15/03/2024 02:00
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="text-sm">Alta utilização de memória</p>
                        <p className="text-xs text-muted-foreground">
                          14/03/2024 18:45
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Ver Todos os Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}