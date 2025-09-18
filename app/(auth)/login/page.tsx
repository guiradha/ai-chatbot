'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { toast } from '@/components/toast';
import { Shield, Building2, Mail, Lock, ArrowRight, AlertCircle, Check, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo';

import { login, type LoginActionState } from '../actions';
import { useSession } from 'next-auth/react';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [emailError, setEmailError] = useState('');

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: 'idle',
    },
  );

  const { update: updateSession } = useSession();

  useEffect(() => {
    if (state.status === 'success') {
      setIsSuccessful(true);
      updateSession();
      router.refresh();
    }
  }, [state.status]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email) {
      setEmailError('Por favor, insira seu email corporativo');
      return;
    }
    
    if (!email.includes('@')) {
      setEmailError('Por favor, insira um email válido');
      return;
    }
    
    setStep('password');
  };

  const handleLogin = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    setPassword(formData.get('password') as string);
    formAction(formData);
  };

  const handleWorkOSLogin = () => {
    window.location.href = '/api/auth/workos';
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form with Blue Background */}
      <div className="flex-1 flex items-center justify-center p-8 bg-brand-blue-main">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8">
            <SaoESalvoLogo size="lg" />
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-left">
              <CardTitle className="text-2xl font-bold tracking-tight">Acesse sua conta</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Entre no sistema de gestão de segurança e saúde no trabalho
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 'email' ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email corporativo</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@empresa.com.br"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError('');
                        }}
                        className={`pl-10 h-12 ${emailError ? 'border-red-500 focus:ring-red-500' : ''}`}
                        autoFocus
                      />
                    </div>
                    {emailError && (
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle className="h-3 w-3" />
                        <span>{emailError}</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-brand-blue-main hover:bg-brand-blue-2 text-white font-semibold"
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">ou acesse como</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      type="button"
                      onClick={() => window.location.href = 'http://localhost:3005/inicio'}
                      className="flex-1 h-12 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium"
                    >
                      Usuário
                    </Button>
                    <Button 
                      type="button"
                      onClick={() => window.location.href = 'http://localhost:3005/admin'}
                      className="flex-1 h-12 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium"
                    >
                      Admin
                    </Button>
                  </div>
                </form>
              ) : (
                <form action={handleLogin} className="space-y-4">
                  <div className="space-y-4">
                    {/* Email Info Card */}
                    <div className="flex items-center gap-3 p-4 bg-brand-blue-main/5 border border-brand-blue-main/10 rounded-lg">
                      <div className="h-12 w-12 rounded-lg bg-brand-blue-main/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-brand-blue-main" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-brand-grey-main">Sistema São e Salvo</p>
                        <p className="text-sm text-muted-foreground">{email}</p>
                      </div>
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        className="text-brand-blue-main hover:bg-brand-blue-main/10"
                        onClick={() => {
                          setStep('email');
                          setPassword('');
                          setEmailError('');
                        }}
                      >
                        Trocar
                      </Button>
                    </div>

                    <input type="hidden" name="email" value={email} />

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Digite sua senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12"
                          autoFocus
                        />
                      </div>
                    </div>

                    {(state.status === 'failed' || state.status === 'invalid_data') && (
                      <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <span>
                          {state.status === 'failed' ? 'Credenciais inválidas!' : 'Falha ao validar o formulário!'}
                        </span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-brand-blue-main hover:bg-brand-blue-2 text-white font-semibold"
                      disabled={isSuccessful}
                    >
                      {isSuccessful ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Entrando...
                        </>
                      ) : (
                        <>
                          Entrar na Plataforma
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <Button type="button" variant="link" size="sm" className="text-brand-blue-main">
                        Esqueceu a senha?
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
            {step === 'email' && (
              <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="text-center text-sm text-muted-foreground">
                  Não tem conta? {' '}
                  <Link href="/register" className="text-brand-blue-main hover:underline font-medium">
                    Criar conta gratuita
                  </Link>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Empresa? {' '}
                  <Button variant="link" size="sm" className="px-0 text-brand-blue-main">
                    Solicite ao RH
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>

          {/* Help text */}
          <div className="mt-8 text-center text-sm text-white/80">
            <p className="mb-2">Problemas para acessar?</p>
            <p className="flex items-center justify-center gap-2">
              Entre em contato: {' '}
              <a href="mailto:suporte@saoesalvo.com.br" className="text-white hover:underline font-medium">
                suporte@saoesalvo.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Minimalist Feature Showcase */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-md space-y-6">
          <h2 className="text-3xl font-bold">
            Saúde e Segurança
          </h2>
          <p className="text-lg text-muted-foreground">
            Acesse treinamentos, documentos e ferramentas de gestão de segurança e saúde no trabalho.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Conteúdo personalizado</p>
                <p className="text-sm text-muted-foreground">
                  Treinamentos adaptados ao seu setor e função
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Certificados válidos</p>
                <p className="text-sm text-muted-foreground">
                  Documentação aceita em fiscalizações
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Acesso 24/7</p>
                <p className="text-sm text-muted-foreground">
                  Estude no seu ritmo, quando quiser
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Ambiente 100% seguro e criptografado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}