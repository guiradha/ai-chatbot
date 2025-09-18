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
import { Upload } from 'lucide-react';

const documentSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  tags: z.string().optional(),
  accessLevel: z.enum(['public', 'internal', 'restricted'], {
    errorMap: () => ({ message: 'Nível de acesso é obrigatório' }),
  }),
  file: z.any().optional(),
});

type DocumentFormData = z.infer<typeof documentSchema>;

interface DocumentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  document?: {
    id: string;
    title: string;
    category: string;
    description: string;
    tags?: string;
    accessLevel: string;
  };
  onSubmit: (data: DocumentFormData) => void;
}

export function DocumentDialog({
  open,
  onOpenChange,
  mode,
  document,
  onSubmit,
}: DocumentDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DocumentFormData>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: document?.title || '',
      category: document?.category || '',
      description: document?.description || '',
      tags: document?.tags || '',
      accessLevel: (document?.accessLevel === 'Público' ? 'public' : 
                    document?.accessLevel === 'Interno' ? 'internal' : 'restricted') as 'public' | 'internal' | 'restricted',
    },
  });

  const handleSubmit = async (data: DocumentFormData) => {
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
            {mode === 'add' ? 'Upload Documento' : 'Editar Documento'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para fazer upload de um novo documento.'
              : 'Edite as informações do documento.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Documento</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título do documento" {...field} />
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
                        <SelectItem value="Políticas">Políticas</SelectItem>
                        <SelectItem value="Procedimentos">Procedimentos</SelectItem>
                        <SelectItem value="Instruções">Instruções</SelectItem>
                        <SelectItem value="Formulários">Formulários</SelectItem>
                        <SelectItem value="Manuais">Manuais</SelectItem>
                        <SelectItem value="Relatórios">Relatórios</SelectItem>
                        <SelectItem value="Certificados">Certificados</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accessLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nível de Acesso</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="public">Público</SelectItem>
                        <SelectItem value="internal">Interno</SelectItem>
                        <SelectItem value="restricted">Restrito</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o conteúdo e finalidade do documento..."
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
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="segurança, nr-35, procedimento (separadas por vírgula)" {...field} />
                  </FormControl>
                  <FormDescription>
                    Use vírgulas para separar múltiplas tags
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {mode === 'add' && (
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Arquivo</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                            className="hidden"
                            id="file-upload"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                          />
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-sm font-medium text-primary hover:text-primary/90"
                          >
                            Clique para fazer upload
                          </label>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, XLS, PPT (máx. 10MB)
                          </p>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

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
                    ? 'Fazendo Upload...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? 'Fazer Upload'
                  : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}