// Test page to verify course data availability
import { getAllCourses, getCourseBySlug } from '@/lib/courses-data'

export default function TestPage() {
  const allCourses = getAllCourses()
  const direcaoDefensiva = getCourseBySlug('direcao-defensiva')
  const aprCourse = getCourseBySlug('apr-analise-risco')
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Course Data Test</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-bold">Total Courses: {allCourses.length}</h2>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-bold">direção-defensiva course:</h2>
          {direcaoDefensiva ? (
            <div>
              <p>✅ Found!</p>
              <p>Title: {direcaoDefensiva.title}</p>
              <p>Duration: {direcaoDefensiva.duration}</p>
            </div>
          ) : (
            <p>❌ Not found</p>
          )}
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-bold">APR course:</h2>
          {aprCourse ? (
            <div>
              <p>✅ Found!</p>
              <p>Title: {aprCourse.title}</p>
              <p>Modules: {aprCourse.modules?.length || 0}</p>
            </div>
          ) : (
            <p>❌ Not found</p>
          )}
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-bold">All Course Slugs:</h2>
          <div className="grid grid-cols-3 gap-2 text-sm">
            {allCourses.map(course => (
              <div key={course.id}>
                {course.slug}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}