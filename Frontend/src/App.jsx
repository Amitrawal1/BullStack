import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './landing page/Navbar'
import Home from './landing page/Home'
import SignUp from './landing page/Signup/Signup'
import About from './landing page/About'
import Support from './landing page/Support/Support'
import Pricing from './landing page/Pricing/Pricing'
import Footer from './landing page/Footer'
import NotFound from './landing page/NotFound'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/Support' element={<Support/>} />
      <Route path='/Pricing' element={<Pricing/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
