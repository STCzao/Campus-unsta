import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo-unsta-nav.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  //Cuando el usuario realiza un "scroll", se agrega el evento con el mismo nombre. Si el scroll es mayor a 50px, setSticky cambia su valor a true, por lo tanto, se modifica el color del Navbar; si no pasa de 50px se mantiene en false

  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="size-logo" src={Logo} alt="" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="Principal" smooth={true} offset={0} duration={500}>
            Principal
          </Link>
        </li>
        <li>
          <Link to="Programa" smooth={true} offset={-260} duration={500}>
            Programa
          </Link>
        </li>
        <li>
          <Link to="Sobre-nosotros" smooth={true} offset={-150} duration={500}>
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link to="Campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="Testimonios" smooth={true} offset={-260} duration={500}>
            Testimonios
          </Link>
        </li>
        <li>
          <Link
            to="Contacto"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contactanos
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
