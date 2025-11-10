import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import RegisterPage from './pages/RegisterPage'

function App() {
 
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}   />
        <Route path='/profile' element={<Profile/>}   />
        <Route path='/' element={<LoginPage/>}   />
        <Route path='/register' element={<RegisterPage/>}   />
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
