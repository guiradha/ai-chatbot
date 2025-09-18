const fs = require('fs');
const path = require('path');

const adminPages = [
  'reports',
  'certificates', 
  'incidents',
  'documents',
  'announcements',
  'monitoring',
  'database',
  'permissions',
  'settings'
];

adminPages.forEach(page => {
  const filePath = path.join(__dirname, 'app', 'admin', page, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old structure with new structure
    content = content.replace(
      /return \(\s*<div className="flex-1">\s*(?:{\/\* Header.*?\*\/})?\s*<div className="[^"]*px-6 py-4 border-b[^>]*>[\s\S]*?<\/div>\s*(?:{\/\* Main Content \*\/})?\s*<div className="p-6 space-y-6">/,
      `return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">${getPageTitle(page)}</h1>
          <p className="text-muted-foreground">
            ${getPageDescription(page)}
          </p>
        </div>
        ${getPageActions(page)}
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">`
    );
    
    // Also fix the simple pages without header actions
    content = content.replace(
      /return \(\s*<div className="flex-1">\s*<div className="px-6 py-4 border-b">([\s\S]*?)<\/div>\s*<div className="p-6 space-y-6">/,
      `return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">$1</div>

      <div className="flex-1 space-y-6 px-8 pb-8">`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${page}/page.tsx`);
  }
});

function getPageTitle(page) {
  const titles = {
    reports: 'Relatórios',
    certificates: 'Certificados',
    incidents: 'Incidentes',
    documents: 'Documentos',
    announcements: 'Comunicados',
    monitoring: 'Monitoramento',
    database: 'Banco de Dados',
    permissions: 'Permissões',
    settings: 'Configurações'
  };
  return titles[page] || page;
}

function getPageDescription(page) {
  const descriptions = {
    reports: 'Análises e métricas do sistema',
    certificates: 'Gerencie certificados emitidos e validações',
    incidents: 'Registros de incidentes e ocorrências de segurança',
    documents: 'Gestão de documentos e arquivos',
    announcements: 'Envie comunicados e avisos',
    monitoring: 'Status do sistema em tempo real',
    database: 'Gestão e manutenção do banco de dados',
    permissions: 'Gerencie funções e permissões de acesso',
    settings: 'Configurações gerais do sistema'
  };
  return descriptions[page] || '';
}

function getPageActions(page) {
  const actions = {
    reports: `<div className="flex items-center gap-2">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="12m">Últimos 12 meses</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>`,
    certificates: `<Button>
          <FileCheck className="mr-2 h-4 w-4" />
          Emitir Certificado
        </Button>`,
    incidents: `<Button>
          <Plus className="mr-2 h-4 w-4" />
          Reportar Incidente
        </Button>`,
    documents: `<Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Documento
        </Button>`,
    announcements: `<Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Comunicado
        </Button>`,
    monitoring: '',
    database: `<div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Backup
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Otimizar
          </Button>
        </div>`,
    permissions: `<Button>
          <Shield className="mr-2 h-4 w-4" />
          Nova Função
        </Button>`,
    settings: `<Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>`
  };
  return actions[page] || '';
}