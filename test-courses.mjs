import { getAllCourses, getCourseBySlug } from './lib/courses-data.ts'

const courses = getAllCourses();
console.log('✅ Total courses available:', courses.length);
console.log('\n📚 Sample courses:');
courses.slice(0, 10).forEach(c => {
  console.log(`  - ${c.slug}: ${c.title} (${c.category})`);
});

// Test specific course
const testSlug = 'direcao-defensiva';
const testCourse = getCourseBySlug(testSlug);
if (testCourse) {
  console.log(`\n✅ Course '${testSlug}' found!`);
  console.log(`   Title: ${testCourse.title}`);
  console.log(`   Duration: ${testCourse.duration}`);
} else {
  console.log(`\n❌ Course '${testSlug}' NOT found`);
}

// Check for APR course
const aprCourse = getCourseBySlug('apr-analise-risco');
if (aprCourse) {
  console.log(`\n✅ Course 'apr-analise-risco' found!`);
  console.log(`   Title: ${aprCourse.title}`);
  console.log(`   Modules: ${aprCourse.modules?.length || 0}`);
}