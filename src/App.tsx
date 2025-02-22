import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Container } from '@mui/material'
import styled from 'styled-components';
import Footer from './components/Footer'
import { TabComponent } from './components/VerticalTabWithLink'
import { appLinks } from './data/data'

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
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
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
