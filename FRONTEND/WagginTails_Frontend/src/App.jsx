import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import FeaturedPets from './components/FeaturedPets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          
          < FeaturedPets />
      </div>
      
      
      
    </>
  )
}

export default App
