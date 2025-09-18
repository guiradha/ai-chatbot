const fs = require('fs');
const path = require('path');

// List of already migrated trainings to skip
const alreadyMigrated = [
  'direcao-defensiva',
  'nr-35-trabalho-em-altura',
  'nr-10-basico',
  'primeiros-socorros',
  'dds-dialogo-seguranca',
  'seguranca-trabalho-geral',
  'lgpd-protecao-dados',
  'covid-19-prevencao',
  'ergonomia-postural',
  'brigada-incendio',
  'nr-06-epi',
  'nr-33-espaco-confinado',
  'nr-05-cipa-grau-risco-1',
  'ginastica-laboral',
  'meio-ambiente-sustentabilidade',
  'investigacao-acidentes'
];

// Read all training files
const trainingDir = 'C:\\GitHub\\tanstack-app\\src\\routes\\treinamentos';
const files = fs.readdirSync(trainingDir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx');

const trainingData = {};
const allIcons = new Set();

files.forEach(file => {
  const slug = file.replace('.tsx', '');
  
  // Skip if already migrated
  if (alreadyMigrated.includes(slug)) {
    console.log(`Skipping ${slug} (already migrated)`);
    return;
  }
  
  // Skip redirect files
  if (slug === 'cipamin-nr22') {
    console.log(`Skipping ${slug} (redirect file)`);
    return;
  }
  
  const filePath = path.join(trainingDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract the trainingData object
  const match = content.match(/const trainingData:\s*TrainingData\s*=\s*(\{[\s\S]*?\n  \})/);
  if (match) {
    try {
      // Clean up the extracted data for parsing
      let dataStr = match[1];
      
      // Replace JSX elements with placeholder strings
      dataStr = dataStr.replace(/<(\w+)\s+className="[^"]*"\s*\/>/g, (match, icon) => {
        allIcons.add(icon);
        return `"ICON:${icon}"`;
      });
      
      // Replace multi-line strings
      dataStr = dataStr.replace(/`([^`]*)`/g, (match, str) => {
        return JSON.stringify(str);
      });
      
      // Store the raw data string for manual processing
      trainingData[slug] = dataStr;
      console.log(`Extracted ${slug}`);
    } catch (e) {
      console.error(`Error processing ${slug}:`, e.message);
    }
  } else {
    console.log(`No trainingData found in ${slug}`);
  }
});

// Write results
fs.writeFileSync('extracted-trainings.json', JSON.stringify(trainingData, null, 2));
fs.writeFileSync('required-icons.txt', Array.from(allIcons).sort().join('\n'));

console.log(`\nExtracted ${Object.keys(trainingData).length} training courses`);
console.log(`Required icons: ${allIcons.size}`);