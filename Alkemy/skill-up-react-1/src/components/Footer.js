import "../css/bootstrap.min.css";

function Footer(){
  return(
    <footer>
      <nav className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="mb-3 mb-md-0 text-muted">Copyright Alkemy Challenge</p>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.instagram.com/alkemy__/?hl=es-la" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
 export default Footer;