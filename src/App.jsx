import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navebar from './components/Navebar'

const App = () => {
  return (
    <div>
      <Navebar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App