// Importing necessary dependencies from React and react-router-dom
import React from 'react';
import { NavLink } from 'react-router-dom';

// Importing the stylesheet for styling the navbar
import './styles.css'; // Assuming this is the path to your CSS file

// Defining the Navbar component
const Navbar = () => {
  return (
    // Defining the navigation bar as a semantic <nav> element
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
      <NavLink to="/deals" className={({ isActive }) => (isActive ? 'active' : '')}>Deals</NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
    </nav>
  );
};

// Exporting Navbar for use in other parts of the application
export default Navbar;


