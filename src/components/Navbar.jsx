import "../styles/navbar.css";
import logoImg from "../assets/images/graphics.svg";

function Navbar() {
  return (
    <header className="navbar-top">
      <figure className="logo-fig-wrap">
        <img className="logo-thumbnail" src={logoImg} alt="logo" />
      </figure>
      <span className="left-side-cont"></span>
    </header>
  );
}

export default Navbar;
