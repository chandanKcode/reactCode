import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
function App() 
{
  return (
      <>
    <Navbar/>
      <div>
     Welcome to Home
              <h1>Home </h1>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Contact' element={<Contact />} />
                  <Route path='/Product' element={<Product/>} />
              </Routes>
      </div>
    </>
  )
}

export default App
