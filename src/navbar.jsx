import PropTypes from "prop-types";
import darkcarticon from "/darkcarticon.svg";
import "./App.css";
import { useState } from "react";
import whitecarticon from "/whitecarticon.svg";

function clickOncart(e) {
  e.preventDefault();
}

// count received 
export default function Navbar({ count }) {
  const [over, setOnover] = useState(darkcarticon);
  return (
    <>
      <nav className="navbar fixed-top  navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
          <a className="navbar-brand px-5 Brand" href="#">
            Navin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Item
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" onClick={clickOncart}>
              <button
                className="btn btn-outline-dark px-3 mx-5"
                onMouseEnter={() => setOnover(whitecarticon)}
                onMouseOut={() => setOnover(darkcarticon)}
                type="submit"
              >
                <img width="20px" alt="carticon" src={over}
                onMouseEnter={() => setOnover(whitecarticon)}
                onMouseOut={() => setOnover(darkcarticon)} />
                &nbsp; Cart &nbsp;
                {/* count displayed */}
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {count}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  clickOncart: PropTypes.func,
  darkcarticon: PropTypes.string,
  whitecarticon: PropTypes.string,
  count: PropTypes.number,
};