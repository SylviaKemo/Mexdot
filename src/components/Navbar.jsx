import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#">
          <img src="/logo-light.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <RiMenu4Fill />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

