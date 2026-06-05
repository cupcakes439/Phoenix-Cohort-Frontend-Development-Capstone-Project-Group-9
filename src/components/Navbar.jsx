import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar-top">
      <figure className="logo-fig-wrap">
        <img className="logo-thumbnail" src="/images/graphics.svg" alt="logo" />
      </figure>
      <span className="left-side-cont"></span>
    </header>
  );
}

export default Navbar;
