import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import { Container } from '@mui/material'
import SideNav from './components/SideNav'
import styled from 'styled-components';
import Footer from './components/Footer'
import LearnKhmer from './pages/LearnKhmerPage'
import NameConverter from './pages/NameConverter'
import React from 'react'

type AppLinkType = {
  displayName: string,
  location: string,
  component: React.ReactElement
}

export const appLinks: AppLinkType[] = [
  {
    displayName: "Home",
    location: "/",
    component: <Home />
  },
  {
    displayName: "Learn Khmer",
    location: "/learnKhmer",
    component: <LearnKhmer />
  },
  {
    displayName: "Name Converter",
    location: "/nameConverter",
    component: <NameConverter />
  },
]

const NavAndAppContainer = styled.div`
display: flex;
justify-content: flex-start;
`

function App() {

  return (
    <div className='appContainer'>
      <Header />
      <NavAndAppContainer>
        <SideNav />
        <Container maxWidth='lg'>
          <BrowserRouter>
            <Routes>
              {appLinks.map(link =>
                <Route path={link.location} element={link.component} />
              )}
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </NavAndAppContainer>
      <Footer />
    </div>
  )
}

export default App
