import React from 'react'
import NavbarComponent from "../Components/Navbar_component";
import WelcomeSection from '../Components/WelcomeSection';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
        <NavbarComponent />
        <WelcomeSection />
        <Features />
        <Footer />
    </div>
  )
}

export default Home;