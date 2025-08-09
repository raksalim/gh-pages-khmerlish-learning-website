import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SideNav from './components/SideNav'
import { getUserEmail } from './utils/authUtils'
import { useState } from 'react'
import { KhmerWordPractice } from './pages/KhmerWordPractice'
import LoginAmplifyAuth from './pages/LoginAmplifyAuth'
import SpeakingPracticePage from './pages/SpeakingPracticePage'
import { PageNotFound } from './pages/PageNotFound'
import Sponsor from './pages/Sponsor'

function App() {
  const [userEmail, setUserEmail] = useState<string | boolean>('')

  getUserEmail().then((email) => {
    setUserEmail(email)
  }).catch((e) => {
    console.warn("fetchAuthSession error", e)
  })
  return (<div className='appContainer'>
    <BrowserRouter>
      <SideNav userEmail={userEmail} setUserEmail={setUserEmail} />
      <div>
        <Routes>
          <Route path="/" element={<SpeakingPracticePage />} />
          <Route path="/login" element={<LoginAmplifyAuth userEmail={userEmail} setUserEmail={setUserEmail} />} />
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
