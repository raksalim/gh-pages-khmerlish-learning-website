import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { appLinks } from './data/data'
// import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
      <div className='appContainer'>
        <Header />
        {/* <NavBar /> */}
        <BrowserRouter>
          <Routes>
            {appLinks.filter((link) => link.isEnabled).map((link, idx) =>
              <Route key={idx} path={link.location} element={link.component} />
            )}
          </Routes>
        </BrowserRouter>

        <Footer />
      </div >
    </>
  )
}

export default App
