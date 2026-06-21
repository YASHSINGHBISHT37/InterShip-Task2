import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import UseCase1 from './pages/UseCase1'
import UseCase2 from './pages/UseCase2'
import UseCase3 from './pages/UseCase3'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uc-01" element={<UseCase1 />} />
        <Route path="/uc-02" element={<UseCase2 />} />
        <Route path="/uc-03" element={<UseCase3 />} />
      </Routes>
    </>
  )
}