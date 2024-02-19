// import react and react-router-dom for routing and navigation
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import the productlist component to display a list of products
import ProductList from './ProductList';
// import global and navbar styles
import './App.css';

// placeholder home component displaying welcome message and image
const Home = () => (
  <div>
    <h2>Welcome to the home of latest techs!</h2>
    <img src={`${process.env.PUBLIC_URL}/images/welcome.gif`} alt="Home Banner" style={{ width: '35%', height: 'auto' }} />
  </div>
);

// placeholder deals component with a message and image
const Deals = () => (
  <div>
    <h3>You just missed today's deals. Please, check back again later</h3>
    <img src={`${process.env.PUBLIC_URL}/images/deals.gif`} alt="Deals Banner" style={{ width: '35%', height: 'auto' }} />
    <p>Check the products page to see if you find something you like</p>
  </div>
);

// products component that renders the productlist
const Products = () => (
  <div>
    <h2>Our Latest Products</h2>
    <ProductList />
  </div>
);

// contact component displaying contact information
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <div id="contacts">
      <p>Tel: 111-111-1111</p>
      <p>Email: contact.email.com</p>
    </div>
  </div>
);

// main app component setting up the router, navigation bar, and routes for the app
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
          <NavLink to="/deals" className={({ isActive }) => (isActive ? 'active' : '')}>Deals</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          // placeholder for additional routes
        </Routes>
      </div>
    </Router>
  );
}

// export the app component for use in index.js
export default App;
