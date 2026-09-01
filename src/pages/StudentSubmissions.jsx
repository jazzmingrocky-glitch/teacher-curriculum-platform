import { FileText, Download, Eye } from 'lucide-react'

function StudentSubmissions() {
  const [submissions] = React.useState([
    {
      id: 1,
      studentName: 'John Doe',
      lessonTitle: 'Introduction to Biology',
      submissionDate: '2024-08-20',
      status: 'submitted',
      fileName: 'homework-bio-lesson1.pdf',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      lessonTitle: 'Cell Structure and Function',
      submissionDate: '2024-08-21',
      status: 'submitted',
      fileName: 'cell-structure-hw.pdf',
    },
    {
      id: 3,
      studentName: 'Bob Johnson',
      lessonTitle: 'Introduction to Biology',
      submissionDate: '2024-08-19',
      status: 'graded',
      fileName: 'biology-hw.pdf',
    },
  ])

  const getStatusBadge = (status) => {
    const styles = {
      submitted: 'bg-blue-100 text-blue-700',
      graded: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
    }
    return styles[status] || styles.pending
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
          <FileText size={40} className="text-blue-600" />
          Student Submissions
        </h1>
        <p className="text-gray-600 mt-2">
          View and manage all student homework submissions
        </p>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Lesson
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Submission Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {submission.studentName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {submission.lessonTitle}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {submission.submissionDate}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        getStatusBadge(submission.status)
                      }`}
                    >
                      {submission.status.charAt(0).toUpperCase() +
                        submission.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Download size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default StudentSubmissions
