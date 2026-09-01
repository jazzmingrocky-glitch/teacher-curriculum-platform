import { useState } from 'react'
import { Upload, File, X } from 'lucide-react'

function FileUpload({ onFileSelect }) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const validateFile = (file) => {
    const maxSize = 50 * 1024 * 1024 // 50MB
    const validTypes = ['application/pdf']

    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF file')
      return false
    }

    if (file.size > maxSize) {
      setError('File size must be less than 50MB')
      return false
    }

    setError(null)
    return true
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      const file = files[0]
      if (validateFile(file)) {
        setSelectedFile(file)
        onFileSelect(file)
      }
    }
  }

  const handleChange = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      const file = files[0]
      if (validateFile(file)) {
        setSelectedFile(file)
        onFileSelect(file)
      }
    }
  }

  const handleClear = () => {
    setSelectedFile(null)
    setError(null)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="w-full">
      {!selectedFile ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
            isDragActive
              ? 'border-blue-500 bg-blue-50 shadow-lg'
              : 'border-gray-300 bg-white hover:bg-gray-50'
          }`}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className="flex flex-col items-center gap-4">
            <div className={`p-4 rounded-full ${
              isDragActive ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <Upload
                size={48}
                className={isDragActive ? 'text-blue-600' : 'text-gray-600'}
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-900">
                Drag your curriculum PDF here
              </p>
              <p className="text-gray-500 mt-2">
                or click to browse files
              </p>
            </div>
            <p className="text-sm text-gray-400">
              Supported format: PDF (Max 50MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <File size={32} className="text-red-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">
                  {selectedFile.name}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <button
              onClick={handleClear}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          <button
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Split Curriculum into Lessons
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}
    </div>
  )
}

export default FileUpload
