import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, FileText, CheckSquare, Menu, X } from 'lucide-react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const navItems = [
    {
      name: 'Curriculum/Lessons',
      path: '/curriculum',
      icon: BookOpen,
    },
    {
      name: 'Student Submissions',
      path: '/submissions',
      icon: FileText,
    },
    {
      name: 'Grading',
      path: '/grading',
      icon: CheckSquare,
    },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-transform duration-300 ease-in-out z-40 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-blue-500">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen size={28} />
            <span>EduHub</span>
          </h1>
          <p className="text-blue-200 text-sm mt-1">Teacher Dashboard</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  active
                    ? 'bg-white text-blue-600 font-semibold shadow-lg'
                    : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-blue-500 text-blue-200 text-sm">
          <p>Welcome back,</p>
          <p className="font-semibold text-white">Teacher</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  )
}

export default Sidebar
