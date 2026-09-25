import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SideNav from './components/SideNav'
import { KhmerWordPractice } from './pages/KhmerWordPractice'
import SpeakingPracticePage from './pages/SpeakingPracticePage'
import { PageNotFound } from './pages/PageNotFound'
import Sponsor from './pages/Sponsor'

function App() {
  return (<div className='appContainer'>
    <BrowserRouter>
      <SideNav />
      <div>
        <Routes>
          <Route path="/" element={<SpeakingPracticePage />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/readingPractice" element={<KhmerWordPractice />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </div >)

}


export default App
