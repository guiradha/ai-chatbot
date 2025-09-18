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

const courseSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  duration: z.string().min(1, 'Duração é obrigatória'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  status: z.enum(['active', 'draft', 'review'], {
    errorMap: () => ({ message: 'Status é obrigatório' }),
  }),
});

type CourseFormData = z.infer<typeof courseSchema>;

interface CourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  course?: {
    id: number;
    title: string;
    category: string;
    duration: string;
    status: string;
    description?: string;
  };
  onSubmit: (data: CourseFormData) => void;
}

export function CourseDialog({
  open,
  onOpenChange,
  mode,
  course,
  onSubmit,
}: CourseDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title || '',
      category: course?.category || '',
      duration: course?.duration || '',
      description: course?.description || '',
      status: (course?.status === 'Ativo' ? 'active' : course?.status === 'Rascunho' ? 'draft' : 'review') as 'active' | 'draft' | 'review',
    },
  });

  const handleSubmit = async (data: CourseFormData) => {
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Novo Curso' : 'Editar Curso'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para criar um novo curso.'
              : 'Edite as informações do curso.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Curso</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: NR-35 Trabalho em Altura" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
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
                        <SelectItem value="Segurança">Segurança</SelectItem>
                        <SelectItem value="Saúde">Saúde</SelectItem>
                        <SelectItem value="Meio Ambiente">Meio Ambiente</SelectItem>
                        <SelectItem value="Qualidade">Qualidade</SelectItem>
                        <SelectItem value="Operacional">Operacional</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duração</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 40 horas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                      <SelectItem value="active">Ativo</SelectItem>
                      <SelectItem value="draft">Rascunho</SelectItem>
                      <SelectItem value="review">Em Revisão</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o conteúdo e objetivos do curso..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
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
                    ? 'Criando...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? 'Criar Curso'
                  : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}