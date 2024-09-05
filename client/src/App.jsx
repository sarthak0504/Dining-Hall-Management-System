import { useState } from 'react'
import './App.css'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Registration from './pages/registration';
import MenuPage from './pages/menu';
import HomePage from './pages/home';
function App() {
  

  return (
    <>
<Router>
         <Routes>
          {/* <Route path="/" exact element={<Homepage/>}  /> */}
         <Route path='/login' exact element={<LoginPage/>}/>
         <Route path='/registration' exact element={<Registration/>}/>
         <Route path='/menu' exact element={<MenuPage/>}/>
         <Route path='/home' exact element={<HomePage/>}/>

         </Routes>
       </Router>
    </>
  )
}

export default App
