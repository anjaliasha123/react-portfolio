import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#tech">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#sur">Experiences</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
