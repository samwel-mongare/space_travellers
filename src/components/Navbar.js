import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

export default function Navbar() {
  const links = [
    {
      id: 0,
      path: '/',
      text: 'Rockets',
    },
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
    <nav className="flex items-center justify-between border-0 px-8 border-b-2 py-4">
      <a href="/" className="flex items-center gap-4">
        <img src={logo} alt="A planet icon" style={{ width: '4rem', height: '4rem' }} />
        <h1 className="text-4xl font-semibold">Space Travelers&apos; Hub</h1>
      </a>
      <ul className="links flex text-blue-400 text-xl font-medium">
        {links.map((link) => (
          <li key={link.id}>

            {link.text === 'Profile' && <span className="ml-8 text-gray-400">|</span> }

            <NavLink to={link.path} className="ml-8">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
