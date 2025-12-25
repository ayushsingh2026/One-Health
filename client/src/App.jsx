import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Hlogin from './pages/hospital/Hlogin'
import Hregister from './pages/hospital/Hregister'
import Llogin from './pages/Labs/Llogin'
import Lregister from './pages/Labs/Lregister'
import UserDashboard from './pages/userDashboard'
import HospitalStaff from './pages/hospital/HospitalStaff'
import LabDashboard from './pages/Labs/LabDashboard'
import LabAppointments from './pages/Labs/LabAppointments'
import LabTests from './pages/Labs/LabTests'
import LabReports from './pages/Labs/LabReports'
import HospitalDashboard from './pages/hospital/HosptalDashboard'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

    <BrowserRouter> 
    <Routes>
      <Route path='/'
      element={
        <Home/>
      }>
      </Route>
      <Route path='/login'
      element={
        <Login/>
      }>
      </Route>
      <Route path='/register'
      element={
        <Register/>
      }>
      </Route>
      <Route path='/hlogin'
      element={
        <Hlogin/>
      }>
      </Route>
      <Route path='/hregister'
      element={
        <Hregister/>
      }>
      </Route>
      <Route path='/llogin'
      element={
        <Llogin/>
      }>
      </Route>
      <Route path='/lregister'
      element={
        <Lregister/>
      }>
      </Route>
      <Route path='/userDashboard'
      element={
        <UserDashboard/>
      }>
      </Route>
      <Route path='/hospitalStaff'
      element={
        <HospitalStaff/>
      }>
      </Route>
      <Route path='/labDashboard'
      element={
        <LabDashboard/>
      }>
      </Route>
      <Route path='/labappointments'
      element={
        <LabAppointments/>
      }>
      </Route>
      <Route path='/labtests'
      element={
        <LabTests/>
      }>
      </Route>
      <Route path='/labreports'
      element={
        <LabReports/>
      }>
      </Route>
      <Route path='/hospitalDashboard'
      element={
        <HospitalDashboard/>
      }>
      </Route>
      
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
