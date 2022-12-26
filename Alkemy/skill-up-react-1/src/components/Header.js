import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import Search from "./Search";

function Header(props){

  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">AlkeFlix</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/List">Listado</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Favourite">Favourite</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <span className="text-success">
                  {props.favourites.length > 0 && props.favourites.length}
                </span>
              </li>
            </ul>
          </div>
          <Search />
        </div>
      </nav>
    </header>
  );
}

export default Header;