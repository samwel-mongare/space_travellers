import logo from '../assets/planet.png';

export default function Navbar() {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="A planet icon" />
      </a>
    </nav>
  );
}
