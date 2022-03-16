import { Link }  from 'react-router-dom'

function Menu () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mynavbar">
      <Link className="navbar-brand" to="/">
        <img src='/src/assets/icon.png' width={'40px'}/>
        <span className="mynavbar__link-name"> Kouhai </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}

export default Menu