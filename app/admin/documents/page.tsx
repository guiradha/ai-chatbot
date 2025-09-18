'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Download, Folder } from 'lucide-react';
import { DocumentDialog } from '@/components/dialogs/document-dialog';

export default function DocumentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const handleAddDocument = () => {
    setSelectedDocument(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditDocument = (document: any) => {
    setSelectedDocument(document);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleSubmitDocument = async (data: any) => {
    console.log('Document data:', data);
    // Here you would typically call an API to save the document
    // For now, we'll just log the data
  };

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
          <p className="text-muted-foreground">Gestão de documentos e arquivos</p>
        </div>
        <Button onClick={handleAddDocument}>
          <Upload className="mr-2 h-4 w-4" />
          Upload Documento
        </Button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Documentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">23 novos este mês</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Documentos Recentes</CardTitle>
            <CardDescription>Últimos documentos adicionados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 bg-muted/50 rounded">
              <FileText className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <DocumentDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={dialogMode}
        document={selectedDocument}
        onSubmit={handleSubmitDocument}
      />
    </div>
  );
}