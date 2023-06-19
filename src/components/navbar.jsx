import '../index.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar-color navbar navbar-light fixed-top flex-column flex-md-row">
        <a className="navbar-brand ms-md-3" href="#about">
          <img className="mr-2 rounded" src={require('../AOH-Logo_White_transparent.png')} width="100px" height="70px" />
        </a>
        <div>
          <ul className="flex-row navbar-nav gap-3 mb-3 mb-md-0">
            <li className="nav-item active">
              <a className="btn btn-outline-light" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light" href="#therapists">Therapists</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light" href="#faq">FAQ</a>
            </li>
            <li className="nav-item me-md-3">
              <a className="btn btn-outline-light" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
