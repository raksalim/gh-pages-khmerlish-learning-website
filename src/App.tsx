import './App.css'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import { Container } from '@mui/material'
import styled from 'styled-components';
import Footer from './components/Footer'
import LearnKhmer from './pages/LearnKhmerPage'
import NameConverter from './pages/NameConverter'
import React, { useEffect } from 'react'
import { TabComponent } from './components/VerticalTabWithLink'

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
margin: 0;
display: flex;
justify-content: flex-start;
`

function App() {

  return (
    <>
      <div className='appContainer'>
        <Header />
        <NavAndAppContainer>
          <Container maxWidth='lg' style={{ margin: 0, padding: 0 }}>
            <BrowserRouter>
              <Routes>
                {appLinks.map((link, idx) =>
                  <Route key={idx} path={link.location} element={<TabComponent initialTab={idx} />} />
                )}
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </NavAndAppContainer>
        <Footer />
      </div >
    </>
  )
}

export default App
