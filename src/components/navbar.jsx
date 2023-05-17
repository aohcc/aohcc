import '../index.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light fixed-top bg-dark flex-column flex-md-row">
        <a className="navbar-brand ml-1" href="#about">
          <img className="mr-2 rounded" src={require('../AOH-Logo_White_transparent.png')} width="100px" height="70px" />
        </a>
        <div>
          <ul className="flex-row navbar-nav">
            <li className="nav-item active">
              <a className="btn btn-outline-light mr-4" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light mr-4" href="#therapists">Therapists</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light mr-1" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
