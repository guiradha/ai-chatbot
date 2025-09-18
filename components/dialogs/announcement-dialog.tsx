'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const announcementSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  content: z.string().min(20, 'Conteúdo deve ter pelo menos 20 caracteres'),
  priority: z.enum(['low', 'medium', 'high', 'urgent'], {
    errorMap: () => ({ message: 'Prioridade é obrigatória' }),
  }),
  targetAudience: z.string().min(1, 'Público-alvo é obrigatório'),
  scheduledDate: z.string().optional(),
  sendEmail: z.boolean(),
  sendSMS: z.boolean(),
});

type AnnouncementFormData = z.infer<typeof announcementSchema>;

interface AnnouncementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  announcement?: {
    id: string;
    title: string;
    content: string;
    priority: string;
    targetAudience: string;
    scheduledDate?: string;
    sendEmail?: boolean;
    sendSMS?: boolean;
  };
  onSubmit: (data: AnnouncementFormData) => void;
}

export function AnnouncementDialog({
  open,
  onOpenChange,
  mode,
  announcement,
  onSubmit,
}: AnnouncementDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AnnouncementFormData>({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      title: announcement?.title || '',
      content: announcement?.content || '',
      priority: (announcement?.priority?.toLowerCase() || 'medium') as 'low' | 'medium' | 'high' | 'urgent',
      targetAudience: announcement?.targetAudience || '',
      scheduledDate: announcement?.scheduledDate || '',
      sendEmail: announcement?.sendEmail || false,
      sendSMS: announcement?.sendSMS || false,
    },
  });

  const handleSubmit = async (data: AnnouncementFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Novo Comunicado' : 'Editar Comunicado'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para criar um novo comunicado.'
              : 'Edite as informações do comunicado.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Comunicado</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite um título claro e objetivo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conteúdo</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escreva o conteúdo do comunicado..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prioridade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a prioridade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Baixa</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                        <SelectItem value="urgent">Urgente</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Público-alvo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o público" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">Todos os Usuários</SelectItem>
                        <SelectItem value="admins">Administradores</SelectItem>
                        <SelectItem value="supervisors">Supervisores</SelectItem>
                        <SelectItem value="technicians">Técnicos</SelectItem>
                        <SelectItem value="operators">Operadores</SelectItem>
                        <SelectItem value="ti">Departamento TI</SelectItem>
                        <SelectItem value="rh">Departamento RH</SelectItem>
                        <SelectItem value="operacoes">Departamento Operações</SelectItem>
                        <SelectItem value="seguranca">Departamento Segurança</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="scheduledDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agendamento (Opcional)</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormDescription>
                    Deixe em branco para enviar imediatamente
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormLabel>Canais de Notificação</FormLabel>
              
              <FormField
                control={form.control}
                name="sendEmail"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Enviar por Email</FormLabel>
                      <FormDescription>
                        Notificar usuários por email
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sendSMS"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Enviar por SMS</FormLabel>
                      <FormDescription>
                        Notificar usuários por SMS (apenas urgentes)
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? mode === 'add'
                    ? 'Enviando...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? form.getValues('scheduledDate') 
                    ? 'Agendar Comunicado'
                    : 'Enviar Comunicado'
                  : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}