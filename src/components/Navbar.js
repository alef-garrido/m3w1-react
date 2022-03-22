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
    <nav className="navbar">
      <h1>Math Magicians</h1>
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
