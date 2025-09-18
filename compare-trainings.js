const fs = require('fs');
const path = require('path');

// Load extracted trainings data
const extractedTrainings = require('./extracted-trainings.json');

// Function to extract training data from page file
function extractTrainingFromPage(filePath, slug) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find the training data object for this slug
    const regex = new RegExp(`['"]${slug}['"]\\s*:\\s*\\{([^}]+(?:\\{[^}]*\\}[^}]*)*?)\\}`, 's');
    const match = content.match(regex);
    
    if (match) {
      // Extract key properties
      const dataSection = match[0];
      
      // Extract title
      const titleMatch = dataSection.match(/title:\s*['"]([^'"]+)['"]/);
      
      // Extract description
      const descriptionMatch = dataSection.match(/description:\s*['"]([^'"]+)['"]/);
      
      // Extract modules
      const modulesMatch = dataSection.match(/modules:\s*\[([\s\S]*?)\],\s*competencias/);
      
      return {
        title: titleMatch ? titleMatch[1] : null,
        description: descriptionMatch ? descriptionMatch[1] : null,
        hasModules: !!modulesMatch
      };
    }
  } catch (error) {
    return null;
  }
  return null;
}

// Check all trainings
console.log('Comparing training content across different pages...\n');
console.log('=' .repeat(80));

const trainingSlugs = Object.keys(extractedTrainings);
const inconsistencies = [];

trainingSlugs.forEach(slug => {
  const extractedData = JSON.parse(extractedTrainings[slug]);
  
  // Check landing page (cursos-nr/[slug])
  const landingPagePath = path.join(__dirname, 'app', 'cursos-nr', '[slug]', 'page.tsx');
  const landingPageData = extractTrainingFromPage(landingPagePath, slug);
  
  // Compare
  const issues = [];
  
  if (landingPageData) {
    if (landingPageData.title !== extractedData.title) {
      issues.push(`  ❌ Title mismatch in landing page`);
      issues.push(`     Extracted: "${extractedData.title}"`);
      issues.push(`     Landing:   "${landingPageData.title}"`);
    }
    
    if (landingPageData.description !== extractedData.description) {
      issues.push(`  ❌ Description mismatch in landing page`);
      issues.push(`     Extracted: "${extractedData.description?.substring(0, 50)}..."`);
      issues.push(`     Landing:   "${landingPageData.description?.substring(0, 50)}..."`);
    }
  } else {
    issues.push(`  ⚠️  Not found in landing page (cursos-nr)`);
  }
  
  // Check if modules exist
  if (!extractedData.modules || extractedData.modules.length === 0) {
    issues.push(`  ⚠️  No modules defined in extracted data`);
  }
  
  if (issues.length > 0) {
    console.log(`\n📋 ${slug}:`);
    issues.forEach(issue => console.log(issue));
    inconsistencies.push({ slug, issues });
  }
});

// Summary
console.log('\n' + '=' .repeat(80));
console.log('\n📊 SUMMARY:');
console.log(`Total trainings checked: ${trainingSlugs.length}`);
console.log(`Trainings with issues: ${inconsistencies.length}`);
console.log(`Trainings consistent: ${trainingSlugs.length - inconsistencies.length}`);

if (inconsistencies.length === 0) {
  console.log('\n✅ All training content is consistent across pages!');
} else {
  console.log('\n⚠️  Found inconsistencies in the following trainings:');
  inconsistencies.forEach(item => {
    console.log(`   - ${item.slug} (${item.issues.length} issues)`);
  });
}