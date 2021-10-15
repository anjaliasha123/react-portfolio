import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#intro">About</a>
        </li>
        <li>
          <a href="#tech">Skills</a>
        </li>
        <li>
          <a href="#sur">Experiences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
