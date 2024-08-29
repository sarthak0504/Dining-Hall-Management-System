import { useState } from 'react'
import './App.css'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Registration from './pages/registration';
function App() {
  

  return (
    <>
<Router>
         <Routes>
          {/* <Route path="/" exact element={<Homepage/>}  /> */}
         <Route path='/login' exact element={<LoginPage/>}/>
         <Route path='/registration' exact element={<Registration/>}/>

         </Routes>
       </Router>
    </>
  )
}

export default App
