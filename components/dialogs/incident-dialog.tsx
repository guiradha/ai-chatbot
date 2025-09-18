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

const incidentSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  description: z.string().min(20, 'Descrição deve ter pelo menos 20 caracteres'),
  severity: z.enum(['low', 'medium', 'high'], {
    errorMap: () => ({ message: 'Severidade é obrigatória' }),
  }),
  location: z.string().min(3, 'Local é obrigatório'),
  reportedBy: z.string().min(2, 'Nome do relator é obrigatório'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  dateOccurred: z.string().min(1, 'Data de ocorrência é obrigatória'),
  timeOccurred: z.string().min(1, 'Hora de ocorrência é obrigatória'),
  involvedPersons: z.string().optional(),
  immediateAction: z.string().optional(),
  status: z.enum(['open', 'in_progress', 'resolved'], {
    errorMap: () => ({ message: 'Status é obrigatório' }),
  }),
});

type IncidentFormData = z.infer<typeof incidentSchema>;

interface IncidentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  incident?: {
    id: string;
    title: string;
    description: string;
    severity: string;
    location: string;
    reportedBy: string;
    category: string;
    dateOccurred: string;
    timeOccurred: string;
    involvedPersons?: string;
    immediateAction?: string;
    status: string;
  };
  onSubmit: (data: IncidentFormData) => void;
}

export function IncidentDialog({
  open,
  onOpenChange,
  mode,
  incident,
  onSubmit,
}: IncidentDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IncidentFormData>({
    resolver: zodResolver(incidentSchema),
    defaultValues: {
      title: incident?.title || '',
      description: incident?.description || '',
      severity: (incident?.severity?.toLowerCase() || 'medium') as 'low' | 'medium' | 'high',
      location: incident?.location || '',
      reportedBy: incident?.reportedBy || '',
      category: incident?.category || '',
      dateOccurred: incident?.dateOccurred || '',
      timeOccurred: incident?.timeOccurred || '',
      involvedPersons: incident?.involvedPersons || '',
      immediateAction: incident?.immediateAction || '',
      status: (incident?.status === 'Aberto' ? 'open' : 
                incident?.status === 'Em Progresso' ? 'in_progress' : 'resolved') as 'open' | 'in_progress' | 'resolved',
    },
  });

  const handleSubmit = async (data: IncidentFormData) => {
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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Reportar Incidente' : 'Editar Incidente'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para reportar um novo incidente.'
              : 'Edite as informações do incidente.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Incidente</FormLabel>
                  <FormControl>
                    <Input placeholder="Descreva brevemente o incidente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição Detalhada</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o incidente em detalhes, incluindo o que aconteceu, como aconteceu e as circunstâncias..."
                      rows={4}
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
                name="severity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Severidade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a severidade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Baixa</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Acidente de Trabalho">Acidente de Trabalho</SelectItem>
                        <SelectItem value="Incidente Ambiental">Incidente Ambiental</SelectItem>
                        <SelectItem value="Quase Acidente">Quase Acidente</SelectItem>
                        <SelectItem value="Vazamento">Vazamento</SelectItem>
                        <SelectItem value="Equipamento Danificado">Equipamento Danificado</SelectItem>
                        <SelectItem value="EPI Danificado">EPI Danificado</SelectItem>
                        <SelectItem value="Condição Insegura">Condição Insegura</SelectItem>
                        <SelectItem value="Ato Inseguro">Ato Inseguro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Área 3, Setor B" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reportedBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reportado por</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome de quem está reportando" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateOccurred"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Ocorrência</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeOccurred"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hora de Ocorrência</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="involvedPersons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pessoas Envolvidas (Opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomes das pessoas envolvidas, separados por vírgula" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="immediateAction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ação Imediata Tomada (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva as ações imediatas tomadas após o incidente..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="open">Aberto</SelectItem>
                      <SelectItem value="in_progress">Em Progresso</SelectItem>
                      <SelectItem value="resolved">Resolvido</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    ? 'Reportando...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? 'Reportar Incidente'
                  : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}