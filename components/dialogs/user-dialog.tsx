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

const userSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  role: z.string().min(1, 'Função é obrigatória'),
  department: z.string().min(1, 'Departamento é obrigatório'),
  status: z.enum(['active', 'inactive', 'pending'], {
    errorMap: () => ({ message: 'Status é obrigatório' }),
  }),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'add' | 'edit';
  user?: {
    id: number;
    name: string;
    email: string;
    role: string;
    department: string;
    status: string;
  };
  onSubmit: (data: UserFormData) => void;
}

export function UserDialog({
  open,
  onOpenChange,
  mode,
  user,
  onSubmit,
}: UserDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || '',
      department: user?.department || '',
      status: (user?.status === 'Ativo' ? 'active' : user?.status === 'Inativo' ? 'inactive' : 'pending') as 'active' | 'inactive' | 'pending',
    },
  });

  const handleSubmit = async (data: UserFormData) => {
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Adicionar Usuário' : 'Editar Usuário'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'add'
              ? 'Preencha os dados para adicionar um novo usuário.'
              : 'Edite as informações do usuário.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="usuario@empresa.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Função</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a função" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Supervisor">Supervisor</SelectItem>
                      <SelectItem value="Técnico">Técnico</SelectItem>
                      <SelectItem value="Operador">Operador</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departamento</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o departamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="TI">TI</SelectItem>
                      <SelectItem value="RH">RH</SelectItem>
                      <SelectItem value="Operações">Operações</SelectItem>
                      <SelectItem value="Segurança">Segurança</SelectItem>
                      <SelectItem value="Produção">Produção</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="active">Ativo</SelectItem>
                      <SelectItem value="inactive">Inativo</SelectItem>
                      <SelectItem value="pending">Pendente</SelectItem>
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
                    ? 'Adicionando...'
                    : 'Salvando...'
                  : mode === 'add'
                  ? 'Adicionar'
                  : 'Salvar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}