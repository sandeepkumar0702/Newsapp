import React from 'react'
const Navbar=(props)=> {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">NewsMonkey</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/">Features</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/">Pricing</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </div>
  )
}
export default Navbar
