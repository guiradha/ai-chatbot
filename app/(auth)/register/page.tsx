'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { toast } from '@/components/toast';
import { Building2, Mail, Lock, ArrowRight, AlertCircle, CheckCircle, Loader2, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo';

import { register, type RegisterActionState } from '../actions';
import { useSession } from 'next-auth/react';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [step, setStep] = useState<'info' | 'password'>('info');

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: 'idle',
    },
  );

  const { update: updateSession } = useSession();

  useEffect(() => {
    if (state.status === 'user_exists') {
      toast({ type: 'error', description: 'Conta já existe!' });
    } else if (state.status === 'failed') {
      toast({ type: 'error', description: 'Falha ao criar conta!' });
    } else if (state.status === 'invalid_data') {
      toast({
        type: 'error',
        description: 'Falha ao validar o formulário!',
      });
    } else if (state.status === 'success') {
      toast({ type: 'success', description: 'Conta criada com sucesso!' });
      setIsSuccessful(true);
      updateSession();
      router.refresh();
    }
  }, [state.status]);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name) {
      toast({
        type: 'error',
        description: 'Por favor, insira seu nome',
      });
      return;
    }

    if (!email) {
      toast({
        type: 'error',
        description: 'Por favor, insira seu email',
      });
      return;
    }
    
    if (!email.includes('@')) {
      toast({
        type: 'error',
        description: 'Por favor, insira um email válido',
      });
      return;
    }
    
    setStep('password');
  };

  const handleRegister = (formData: FormData) => {
    if (password !== confirmPassword) {
      toast({
        type: 'error',
        description: 'As senhas não coincidem',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        type: 'error',
        description: 'A senha deve ter pelo menos 6 caracteres',
      });
      return;
    }

    formAction(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Register Form with Blue Background */}
      <div className="flex-1 flex items-center justify-center p-8 bg-brand-blue-main">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8">
            <SaoESalvoLogo size="lg" />
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-left">
              <CardTitle className="text-2xl font-bold tracking-tight">Criar sua conta</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Cadastre-se para acessar treinamentos de segurança
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 'info' ? (
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Nome completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 h-12"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-brand-blue-main hover:bg-brand-blue-2 text-white font-semibold"
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <form action={handleRegister} className="space-y-4">
                  <div className="space-y-4">
                    {/* User Info Card */}
                    <div className="flex items-center gap-3 p-4 bg-brand-blue-main/5 border border-brand-blue-main/10 rounded-lg">
                      <div className="h-12 w-12 rounded-lg bg-brand-blue-main/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-brand-blue-main" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-brand-grey-main">{name}</p>
                        <p className="text-sm text-muted-foreground">{email}</p>
                      </div>
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        className="text-brand-blue-main hover:bg-brand-blue-main/10"
                        onClick={() => {
                          setStep('info');
                          setPassword('');
                          setConfirmPassword('');
                        }}
                      >
                        Editar
                      </Button>
                    </div>

                    <input type="hidden" name="email" value={email} />
                    <input type="hidden" name="name" value={name} />

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Crie uma senha forte"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmar senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirme sua senha"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>

                    {(state.status === 'failed' || state.status === 'user_exists') && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {state.status === 'user_exists' ? 'Conta já existe!' : 'Falha ao criar conta!'}
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-brand-blue-main hover:bg-brand-blue-2 text-white font-semibold"
                      disabled={isSuccessful}
                    >
                      {isSuccessful ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Criando conta...
                        </>
                      ) : (
                        <>
                          Criar conta
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-0">
              <div className="text-center text-sm text-muted-foreground">
                Já tem uma conta? {' '}
                <Link href="/login" className="text-brand-blue-main hover:underline font-medium">
                  Fazer login
                </Link>
              </div>
            </CardFooter>
          </Card>

          {/* Help text */}
          <div className="mt-8 text-center text-sm text-white/80">
            <p className="mb-2">Problemas para criar conta?</p>
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
            Junte-se a milhares de profissionais que já se capacitaram em segurança e saúde no trabalho.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Treinamentos certificados</p>
                <p className="text-sm text-muted-foreground">
                  Cursos reconhecidos e aceitos em todo o Brasil
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Acesso imediato</p>
                <p className="text-sm text-muted-foreground">
                  Comece a estudar assim que criar sua conta
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Suporte especializado</p>
                <p className="text-sm text-muted-foreground">
                  Tire suas dúvidas com especialistas em SST
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>Para pessoas físicas e empresas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}