import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Curriculum from './pages/Curriculum'
import StudentSubmissions from './pages/StudentSubmissions'
import Grading from './pages/Grading'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Curriculum />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/submissions" element={<StudentSubmissions />} />
          <Route path="/grading" element={<Grading />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
