import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Login from './pages/login/Login'
import Get from './pages/Api/users/Getuser'

import Index from './pages/index'
import Navbar from './pages/assets/navbar/Navbar'
import Layout from './pages/assets/navbar/Navon'
import Postuser from './pages/Api/users/Postuser'
import Edituser from './pages/Api/users/Edituser'
import Loginv2 from './pages/login/loginv2'
import usernamelog from './pages/assets/navbar/context'
import Footer from './pages/assets/footer/footer1'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuhtdRoute, ProtectedRoute } from './pages/assets/route/history'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
<Switch>
<AuhtdRoute exact path="/" component={Login} />
    <Layout>
      <ProtectedRoute path='/index' component={Index } />
      <ProtectedRoute path='/register' component={Postuser} />
      <ProtectedRoute path='/edituser/:id' component={Edituser} />
      <ProtectedRoute path='/login' component={Loginv2 }/>

      </Layout>
      </Switch>
    </BrowserRouter>
 
  )
}

export default App
