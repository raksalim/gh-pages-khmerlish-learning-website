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

function App() {
  const [userEmail, setUserEmail] = useState<string | boolean>('')

  getUserEmail().then((email) => {
    console.log("email", email)
    setUserEmail(email)
  }).catch((e) => {
    console.warn("fetchAuthSession error", e)
  })
  return (<div className='appContainer'>
    <BrowserRouter>
      <SideNav userEmail={userEmail} setUserEmail={setUserEmail} />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path="/" element={<KhmerWordPractice />} />
          <Route path="/login" element={<LoginAmplifyAuth userEmail={userEmail} setUserEmail={setUserEmail} />} />
          <Route path="/speakingPractice" element={<SpeakingPracticePage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </div >)

}


export default App
