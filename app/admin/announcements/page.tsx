'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, Plus, Send } from 'lucide-react';
import { AnnouncementDialog } from '@/components/dialogs/announcement-dialog';

export default function AnnouncementsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const handleAddAnnouncement = () => {
    setSelectedAnnouncement(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditAnnouncement = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleSubmitAnnouncement = async (data: any) => {
    console.log('Announcement data:', data);
    // Here you would typically call an API to save the announcement
    // For now, we'll just log the data
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Comunicados</h1>
          <p className="text-muted-foreground">
            Gerencie comunicados e avisos para a equipe
          </p>
        </div>
        <Button onClick={handleAddAnnouncement}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Comunicado
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Enviados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Total de comunicados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Leitura</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Média geral</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Agendados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Para envio futuro</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Comunicados Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 bg-muted/50 rounded">
              <Megaphone className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <AnnouncementDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={dialogMode}
        announcement={selectedAnnouncement}
        onSubmit={handleSubmitAnnouncement}
      />
    </div>
  );
}