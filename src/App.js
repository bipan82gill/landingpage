import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Toolbar/Slider';
import ButtonStyle from './components/ButtonStyle';
import Section from './components/Section';
import Services from './components/Services'
import Contactus from './pages/Contactus';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <>
    <Container maxWidth=''>
    <Navbar/>
    <div className="page-container">    
    <Slider/>
    </div>
    <ButtonStyle/>
    <Section/>
    <Contactus/>
    <Services/>
    <Footer/>
   
    </Container>
    
    </>
  );
}

export default App;
