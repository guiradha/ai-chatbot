import { HelpCircle, MessageCircle, Book, Video, Phone, Mail, ExternalLink, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AjudaPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Central de Ajuda</h1>
        <p className="text-muted-foreground mt-2">
          Encontre respostas para suas dúvidas e aprenda a usar melhor a plataforma
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Como posso te ajudar hoje?"
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="p-3 bg-[#0063F3]/10 rounded-lg w-fit mb-2">
              <Book className="h-6 w-6 text-[#0063F3]" />
            </div>
            <CardTitle>Guias e Tutoriais</CardTitle>
            <CardDescription>
              Aprenda passo a passo como usar cada funcionalidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0">
              Acessar guias <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="p-3 bg-[#0063F3]/10 rounded-lg w-fit mb-2">
              <Video className="h-6 w-6 text-[#0063F3]" />
            </div>
            <CardTitle>Vídeos de Treinamento</CardTitle>
            <CardDescription>
              Assista tutoriais em vídeo sobre a plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0">
              Ver vídeos <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="p-3 bg-[#0063F3]/10 rounded-lg w-fit mb-2">
              <MessageCircle className="h-6 w-6 text-[#0063F3]" />
            </div>
            <CardTitle>Chat de Suporte</CardTitle>
            <CardDescription>
              Converse com nossa equipe de suporte em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0">
              Iniciar chat <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Perguntas Frequentes</CardTitle>
            <CardDescription>Respostas para as dúvidas mais comuns</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como faço para adicionar um novo membro à equipe?</AccordionTrigger>
                <AccordionContent>
                  Para adicionar um novo membro, vá até a página "Equipe" no menu lateral, clique em "Adicionar Membro" e preencha as informações necessárias. O novo membro receberá um email com as instruções de acesso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Como emitir um certificado de treinamento?</AccordionTrigger>
                <AccordionContent>
                  Após a conclusão do treinamento, acesse a página "Certificados", localize o treinamento concluído e clique em "Emitir Certificado". O documento será gerado automaticamente em PDF.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como acompanhar o progresso da equipe?</AccordionTrigger>
                <AccordionContent>
                  Você pode acompanhar o progresso acessando a página "Relatórios". Lá você encontrará dashboards com métricas detalhadas sobre o desempenho e progresso de cada membro da equipe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Posso personalizar os treinamentos?</AccordionTrigger>
                <AccordionContent>
                  Sim! Na página "Cursos" você pode criar trilhas personalizadas de aprendizado, adicionar conteúdos próprios e adaptar os treinamentos às necessidades específicas da sua empresa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entre em Contato</CardTitle>
            <CardDescription>Precisa de ajuda adicional? Fale conosco</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="p-2 bg-[#0063F3]/10 rounded">
                <Phone className="h-5 w-5 text-[#0063F3]" />
              </div>
              <div>
                <p className="font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">0800 123 4567</p>
                <p className="text-xs text-muted-foreground">Seg-Sex, 8h às 18h</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#0063F3]/10 rounded">
                  <Mail className="h-5 w-5 text-[#0063F3]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">suporte@saoesalvo.com.br</p>
                  <p className="text-xs text-muted-foreground">Resposta em até 24h</p>
                </div>
              </div>
              <Button size="sm" className="bg-[#0063F3] hover:bg-[#0063F3]/90">
                Enviar Email
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#0063F3]/10 rounded">
                  <MessageCircle className="h-5 w-5 text-[#0063F3]" />
                </div>
                <div>
                  <p className="font-medium">Chat Online</p>
                  <p className="text-sm text-muted-foreground">Suporte em tempo real</p>
                </div>
              </div>
              <Button size="sm" className="bg-[#0063F3] hover:bg-[#0063F3]/90">
                Iniciar Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}