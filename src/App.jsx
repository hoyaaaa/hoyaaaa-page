import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Apps from './pages/Apps'
import Donate from './pages/Donate'
import Resume from './pages/Resume'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
