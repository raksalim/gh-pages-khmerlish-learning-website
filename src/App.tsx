import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { appLinks } from './data/data'
import SideNav from './components/SideNav'
import { getUserEmail } from './utils/authUtils'
import { useState } from 'react'

function App() {
  const [userEmail, setUserEmail] = useState<string | boolean>('')

  getUserEmail().then((email) => {
    console.log("email", email)
    setUserEmail(email)
  }).catch((e) => {
    console.warn("fetchAuthSession error", e)
  })
  return (<div className='appContainer'>
    {/* <Header /> */}
    <BrowserRouter>
      <SideNav userEmail={userEmail} />
      <div style={{ display: 'flex' }}>
        {/* <NavBar /> */}
        <Routes>
          {appLinks.filter((link) => link.isEnabled).map((link, idx) =>
            <Route key={idx} path={link.location} element={link.component} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </div >)

}


export default App
