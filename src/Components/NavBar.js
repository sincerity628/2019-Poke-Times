import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// UI Component
const NavBar = (props) => {
  // console.log(props);
  // setInterval(() => {
  //   props.history.push('/about');
  // }, 3000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Poke'Times</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// Higher Order Component
export default withRouter(NavBar)
// So that Navbar Component will become SuperCharged Component
