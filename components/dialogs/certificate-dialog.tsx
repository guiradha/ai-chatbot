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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const certificateSchema = z.object({
  studentName: z.string().min(2, 'Nome do aluno é obrigatório'),
  studentEmail: z.string().email('Email inválido').optional(),
  courseName: z.string().min(1, 'Curso é obrigatório'),
  completionDate: z.string().min(1, 'Data de conclusão é obrigatória'),
  expiryDate: z.string().min(1, 'Data de validade é obrigatória'),
  instructorName: z.string().min(2, 'Nome do instrutor é obrigatório'),
  hours: z.string().min(1, 'Carga horária é obrigatória'),
});

type CertificateFormData = z.infer<typeof certificateSchema>;

interface CertificateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  certificate?: {
    id: string;
    studentName: string;
    studentEmail?: string;
    courseName: string;
    completionDate: string;
    expiryDate: string;
    instructorName?: string;
    hours?: string;
  };
  onSubmit: (data: CertificateFormData) => void;
}

export function CertificateDialog({
  open,
  onOpenChange,
  mode,
  certificate,
  onSubmit,
}: CertificateDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CertificateFormData>({
    resolver: zodResolver(certificateSchema),
    defaultValues: {
      studentName: certificate?.studentName || '',
      studentEmail: certificate?.studentEmail || '',
      courseName: certificate?.courseName || '',
      completionDate: certificate?.completionDate || '',
      expiryDate: certificate?.expiryDate || '',
      instructorName: certificate?.instructorName || '',
      hours: certificate?.hours || '',
    },
  });

  const handleSubmit = async (data: CertificateFormData) => {
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
            {mode === 'add' ? 'Emitir Certificado' : 'Editar Certificado'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para emitir um novo certificado.'
              : 'Edite as informações do certificado.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Aluno</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email do Aluno</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="aluno@empresa.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o curso" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="NR-35">NR-35 Trabalho em Altura</SelectItem>
                      <SelectItem value="NR-10">NR-10 Segurança em Eletricidade</SelectItem>
                      <SelectItem value="NR-33">NR-33 Espaço Confinado</SelectItem>
                      <SelectItem value="Primeiros Socorros">Primeiros Socorros</SelectItem>
                      <SelectItem value="CIPA">CIPA</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="completionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Conclusão</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Validade</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="instructorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Instrutor</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do instrutor" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carga Horária</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 40 horas" {...field} />
                    </FormControl>
                    <FormMessage />
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
                    ? 'Emitindo...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? 'Emitir Certificado'
                  : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}