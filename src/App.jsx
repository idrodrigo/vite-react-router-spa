import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Rey from './Rey'
import Nav from './Nav'
import Error404 from './Error404'
import Home from './Home'

function App() {
 

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reyes/:rey' element={<Rey />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
