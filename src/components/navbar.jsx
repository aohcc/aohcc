import { NavLink, Link, Outlet } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark flex-column flex-md-row">
        <NavLink className="navbar-brand ml-1" to="/">
          <img className="mr-2 rounded" src={require('../AOH-Logo_White_transparent.png')} width="100px" height="70px" />
        </NavLink>
        <div>
          <ul className="flex-row navbar-nav">
            <NavLink className="btn btn-outline-light mr-4" to="/projects">Projects</NavLink>
            <NavLink className="btn btn-outline-light mr-1" to="/contact-me">Contact me</NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
