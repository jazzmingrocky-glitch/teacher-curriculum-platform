import { useState } from 'react'
import FileUpload from '../components/FileUpload'
import { BookOpen, Plus } from 'lucide-react'

function Curriculum() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: 'Introduction to Biology',
      pages: '1-15',
      uploadDate: '2024-08-15',
      students: 24,
    },
    {
      id: 2,
      title: 'Cell Structure and Function',
      pages: '16-35',
      uploadDate: '2024-08-15',
      students: 24,
    },
    {
      id: 3,
      title: 'Photosynthesis Basics',
      pages: '36-52',
      uploadDate: '2024-08-15',
      students: 24,
    },
  ])

  const handleFileSelect = (file) => {
    setUploadedFile(file)
    console.log('File selected:', file)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen size={40} className="text-blue-600" />
            Curriculum & Lessons
          </h1>
          <p className="text-gray-600 mt-2">
            Upload your curriculum PDF and split it into manageable lessons
          </p>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Upload Curriculum PDF
        </h2>
        <p className="text-gray-600 mb-6">
          Our system will automatically split the PDF into individual lessons for you to customize.
        </p>
        <FileUpload onFileSelect={handleFileSelect} />
      </div>

      {/* Lessons List Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Lessons
            </h2>
            <p className="text-gray-600 mt-1">
              {lessons.length} lessons created
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            <Plus size={20} />
            Create Lesson
          </button>
        </div>

        {lessons.length > 0 ? (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pages {lesson.pages} • Assigned to {lesson.students} students
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right mr-4">
                  <p className="text-sm text-gray-500">
                    {lesson.uploadDate}
                  </p>
                </div>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  Edit
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              No lessons yet. Upload a PDF to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Curriculum
