import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">Super Admin</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collpase navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">List of Schools</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New School</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li> */}
        </ul>
        </div>
      </nav>
    );
  }
}