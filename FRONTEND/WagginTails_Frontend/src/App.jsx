
import './App.css'
import FeaturedPets from './components/FeaturedPets'
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Button from './components/Button'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup';


function App() {

  return (
    <>
      <div>
            
      <Header/>
      <HeroSection/>
      <LoginPopup/>
      <Button/>
      <FeaturedPets />
      <Footer/>
          
      </div>
      
    </>
  );
}

export default App
