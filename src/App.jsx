import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Blogcontext, Blogprovider } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Blogprovider>
    <div>
    {/* <Blogcontext> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
      {/* </Blogcontext> */}
    </div>
    </Blogprovider>
  )
}

export default App
