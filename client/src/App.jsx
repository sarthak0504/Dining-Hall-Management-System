import { useState } from 'react'
import './App.css'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Registration from './pages/registration';
import MenuPage from './pages/menu';
import HomePage from './pages/home';
import Feedback from './pages/feedback';
import Payment from './pages/payment';
function App() {
  

  return (
    <>
<Router>
         <Routes>
          {/* <Route path="/" exact element={<Homepage/>}  /> */}
         <Route path='/login' exact element={<LoginPage/>}/>
         <Route path='/registration' exact element={<Registration/>}/>
         <Route path='/menu' exact element={<MenuPage/>}/>
         <Route path='/feedback' exact element={<Feedback/>}/>
         <Route path='/payment' exact element={<Payment/>}/>
         <Route path='/' exact element={<HomePage/>}/>
         </Routes>
       </Router>
    </>
  )
}

export default App
