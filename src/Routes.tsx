import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Home from './pages/Home'

function AppRoutes () {
  return (
    <Router>
        <Routes>
          <Route exact={true} path='/' element={< Home/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes