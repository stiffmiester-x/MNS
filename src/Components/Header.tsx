import React from 'react'
import {  BrowserRouter as Router,Link, Switch } from "react-router-dom";
export default function Header() {
    return (
        <div className='App'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <Router>
              <Switch>
                <Link className="navbar-brand" to="/">
                   Marks N Spencer
                </Link>
              </Switch>
            </Router>  
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Router>
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                  </Router>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
            
        </div>
    )
}
