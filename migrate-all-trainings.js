const fs = require('fs');
const path = require('path');

// Read all training files from the old project
const sourceDir = 'C:\\GitHub\\tanstack-app\\src\\routes\\treinamentos';
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx' && f !== 'cipamin-nr22.tsx');

console.log(`Found ${files.length} training files to migrate`);

// Extract training data from each file
const trainings = {};
const allIcons = new Set(['Car', 'Shield', 'Eye', 'AlertTriangle', 'HardHat', 'Zap', 'Heart', 'MessageSquare', 'Users', 'Award', 'BookOpen', 'Lock', 'FileText', 'Home', 'UserCheck', 'Activity', 'Monitor', 'Dumbbell', 'Flame']);

files.forEach(file => {
  const slug = file.replace('.tsx', '');
  const filePath = path.join(sourceDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract the trainingData object
  const dataMatch = content.match(/const trainingData:\s*TrainingData\s*=\s*(\{[\s\S]*?\n  \})/);
  
  // Extract icon imports
  const iconMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
  if (iconMatch) {
    const icons = iconMatch[1].split(',').map(i => i.trim());
    icons.forEach(icon => allIcons.add(icon));
  }
  
  if (dataMatch) {
    trainings[slug] = dataMatch[1];
    console.log(`Extracted: ${slug}`);
  }
});

// Generate the complete page file
const iconImports = Array.from(allIcons).sort().join(', ');

const pageContent = `import { notFound } from 'next/navigation'
import { TrainingPageTemplate, TrainingData } from '@/components/training-page-template'
import { ${iconImports} } from "lucide-react"

// Training data for each course
const trainingData: Record<string, TrainingData> = {
${Object.entries(trainings).map(([slug, data]) => {
  // Clean up the data string
  let cleanData = data
    .replace(/^\s*\{/, '')  // Remove opening brace
    .replace(/\}\s*$/, '')  // Remove closing brace
    .trim();
  
  return `  '${slug}': {
${cleanData}
  }`;
}).join(',\n\n')}
}

interface PageProps {
  params: { slug: string }
}

export default function TrainingPage({ params }: PageProps) {
  const training = trainingData[params.slug]
  
  if (!training) {
    notFound()
  }

  return <TrainingPageTemplate data={training} />
}

export function generateStaticParams() {
  return Object.keys(trainingData).map((slug) => ({
    slug: slug,
  }))
}`;

// Write the complete file
fs.writeFileSync('app/treinamentos/[slug]/page-complete.tsx', pageContent);

console.log(`\nMigration complete!`);
console.log(`Total trainings: ${Object.keys(trainings).length}`);
console.log(`Total icons used: ${allIcons.size}`);
console.log(`\nOutput written to: app/treinamentos/[slug]/page-complete.tsx`);
console.log(`\nManual step required:`);
console.log(`1. Review the generated file`);
console.log(`2. Replace the existing page.tsx with page-complete.tsx`);