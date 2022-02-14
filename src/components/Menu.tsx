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
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/catho">
              <i className="bi bi-bag-check-fill"></i>
              <span className="mynavbar__link-name">Catho</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/programathor">
              <i className="bi bi-archive-fill"></i>
              <span className="mynavbar__link-name">Programathor</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre">
              <i className="bi bi-question-square-fill"></i>
              <span className="mynavbar__link-name">Sobre</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu