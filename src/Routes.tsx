import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"

import Home from './pages/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'


function AppRoutes () {
  return (
    <Router>
      <Menu/>
        <Routes>
          <Route exact={true} path='/' element={< Home/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRoutes