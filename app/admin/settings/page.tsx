'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Save, Mail, Globe, Shield } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">Configurações gerais do sistema</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Configurações Gerais</CardTitle>
            <CardDescription>Configure as preferências básicas do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nome da Empresa</Label>
              <Input id="company" placeholder="São e Salvo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email de Contato</Label>
              <Input id="email" type="email" placeholder="contato@saoesalvo.com.br" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" placeholder="https://saoesalvo.com.br" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
            <CardDescription>Configure as notificações do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receber notificações importantes por email
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Relatórios Automáticos</Label>
                <p className="text-sm text-muted-foreground">
                  Enviar relatórios semanais automaticamente
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de Segurança</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar sobre incidentes de segurança
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Segurança</CardTitle>
            <CardDescription>Configurações de segurança e privacidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Exigir 2FA para todos os administradores
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Logs de Auditoria</Label>
                <p className="text-sm text-muted-foreground">
                  Registrar todas as ações administrativas
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}