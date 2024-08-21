import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>Shoe Store</h1>
      <div>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
        <button>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
