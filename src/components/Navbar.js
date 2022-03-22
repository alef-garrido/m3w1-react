import './styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar--container">
      <div className="navbar--logo">
        <h2>Math4Ever</h2>
        <div className="navbar--deco" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <Link to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
