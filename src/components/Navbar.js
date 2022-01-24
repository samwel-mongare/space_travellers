import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

export default function Navbar() {
  const links = [
    {
      id: 1,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/Profile',
      text: 'Profile',
    },
  ];

  return (
    <nav>
      <a href="/">
        <img src={logo} alt="A planet icon" style={{ width: '4rem', height: '4rem' }} />
      </a>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
