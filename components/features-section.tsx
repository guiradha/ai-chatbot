import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Users, Target, Brain, BookOpen, Clock, Award, FileCheck, BarChart3, Video, Smartphone, Globe, Fingerprint } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-brand-grey-7/30 py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Tudo que você precisa para conformidade total
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Solução completa para gestão de treinamentos em SST com IA
                    </p>
                </div>
                <div className="grid grid-cols-8 gap-3">
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <div className="relative m-auto">
                                        <div className="relative">
                                            <Fingerprint className="h-12 w-12 text-brand-grey-4" />
                                            <div className="absolute inset-0 h-1/2 overflow-hidden">
                                                <Fingerprint className="h-12 w-12 text-brand-grey-3" />
                                            </div>
                                        </div>
                                        <div className="absolute -inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-brand-grey-main"></div>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition">Sob Medida</h2>
                                    <p className="text-muted-foreground">Plataforma personalizada para sua empresa com identidade visual e políticas exclusivas.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <Shield className="m-auto h-12 w-12" style={{color: '#4B5563'}} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition">Certificação Legal</h2>
                                    <p className="text-muted-foreground">Certificados com assinatura digital e conformidade com todas as NRs vigentes.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <Brain className="m-auto h-12 w-12" style={{color: '#4B5563'}} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition">IA Especializada</h2>
                                    <p className="text-muted-foreground">Assistente inteligente treinado em SST para tirar dúvidas 24/7 por chat, voz ou imagem.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-5 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <BarChart3 className="m-auto h-12 w-12" style={{color: '#4B5563'}} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition">Análises Avançadas</h2>
                                    <p className="text-muted-foreground">Relatórios detalhados, métricas de engajamento e ROI mensurável.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-4">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                        <Target className="m-auto size-5" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-zinc-800 transition">Aprendizado Adaptativo</h2>
                                        <p className="text-muted-foreground">Sistema inteligente que se adapta ao ritmo de cada colaborador, garantindo melhor retenção.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border bg-brand-grey-6"></span>
                                        <span className="block size-2 rounded-full border bg-brand-grey-6"></span>
                                        <span className="block size-2 rounded-full border bg-brand-grey-6"></span>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-4">
                                        <div className="flex items-center gap-3 p-2 bg-brand-success/10 rounded-lg">
                                            <div className="h-8 w-8 bg-brand-success rounded-full flex items-center justify-center">
                                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">Módulo concluído</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-2 bg-brand-blue-main/10 rounded-lg">
                                            <div className="h-8 w-8 bg-brand-blue-main rounded-full flex items-center justify-center">
                                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium">97% de aprovação</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-4">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                        <Users className="m-auto size-6" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">Gestão Completa</h2>
                                        <p className="text-muted-foreground">Controle total de vencimentos, relatórios gerenciais e painel de conformidade em tempo real.</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-brand-grey-6 sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm bg-white">NR-35</span>
                                            <div className="ring-4 ring-white size-7">
                                                <div className="size-full rounded-full bg-brand-success"></div>
                                            </div>
                                        </div>
                                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                            <div className="ring-4 ring-white size-8">
                                                <div className="size-full rounded-full bg-brand-blue-main"></div>
                                            </div>
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm bg-white">NR-10</span>
                                        </div>
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm bg-white">NR-33</span>
                                            <div className="ring-4 ring-white size-7">
                                                <div className="size-full rounded-full bg-brand-purple"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                    <Card className="relative overflow-hidden">
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <BookOpen className="m-auto size-5" strokeWidth={1} />
                                </div>
                                <span className="text-2xl font-bold text-brand-blue-main">35</span>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-medium">NRs Completas</h2>
                                <p className="text-muted-foreground">Biblioteca atualizada com todas as normas regulamentadoras.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative overflow-hidden">
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <Award className="m-auto size-5" strokeWidth={1} />
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="h-6 w-6 rounded-full bg-brand-purple border-2 border-white" />
                                    <div className="h-6 w-6 rounded-full bg-brand-grey-6 border-2 border-white" />
                                    <div className="h-6 w-6 rounded-full bg-brand-purple-dark border-2 border-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-medium">Gamificação</h2>
                                <p className="text-muted-foreground">Rankings e prêmios para engajar colaboradores.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative overflow-hidden">
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                                    <Smartphone className="m-auto size-5" strokeWidth={1} />
                                </div>
                                <div className="flex gap-2 items-center">
                                    {/* Apple Logo */}
                                    <svg className="h-5 w-5 text-brand-grey-main" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    {/* Android Logo */}
                                    <svg className="h-5 w-5 text-brand-success" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.04-.82.26l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.66 5.71c-.17-.3-.53-.41-.82-.26-.3.16-.42.54-.26.85l1.84 3.18C3.84 10.92 2 13.77 2 17v1c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1c0-3.23-1.84-6.08-4.4-7.52zM7 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-medium">App Mobile</h2>
                                <p className="text-muted-foreground">Acesso completo via iOS e Android.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}