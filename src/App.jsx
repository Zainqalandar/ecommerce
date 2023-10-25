import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Myprovider } from './Context/Usercontext'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(80)
  return (
    <>
      <Myprovider value={{ data, setData }}>
        <Header />
        <Outlet />
      </Myprovider>
    </>
  )
}

export default App
