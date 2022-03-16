import { Link }  from 'react-router-dom'

function Menu () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mynavbar">
      <Link className="navbar-brand" to="/">
        <img src='/src/assets/icon.png' width={'40px'}/>
        <span className="mynavbar__link-name"> Kouhai </span>
      </Link>
    </nav>
  )
}

export default Menu