import { CheckSquare, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

function Grading() {
  const [grades] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      lessonTitle: 'Introduction to Biology',
      grade: 'A',
      feedback: 'Excellent work! Your answers were thorough and well-explained.',
      submissionDate: '2024-08-19',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      lessonTitle: 'Cell Structure and Function',
      grade: 'B+',
      feedback: 'Good job! A few answers needed more detail. See comments in the PDF.',
      submissionDate: '2024-08-20',
    },
    {
      id: 3,
      studentName: 'Bob Johnson',
      lessonTitle: 'Introduction to Biology',
      grade: 'B',
      feedback: 'Solid understanding demonstrated. Review photosynthesis section.',
      submissionDate: '2024-08-18',
    },
  ])

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'bg-green-100 text-green-700'
    if (grade.includes('B')) return 'bg-blue-100 text-blue-700'
    if (grade.includes('C')) return 'bg-yellow-100 text-yellow-700'
    return 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
          <CheckSquare size={40} className="text-blue-600" />
          Grading
        </h1>
        <p className="text-gray-600 mt-2">
          Grade student submissions and provide feedback
        </p>
      </div>

      {/* Grading Cards */}
      <div className="space-y-6">
        {grades.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.studentName}
                  </h3>
                  <span
                    className={`text-2xl font-bold px-4 py-1 rounded-lg ${
                      getGradeColor(item.grade)
                    }`}
                  >
                    {item.grade}
                  </span>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">Lesson:</span> {item.lessonTitle}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted: {item.submissionDate}
                </p>
              </div>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Your Feedback:
              </p>
              <p className="text-gray-700">{item.feedback}</p>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                <MessageSquare size={18} />
                Add More Feedback
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
                <Send size={18} />
                Send Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grading
