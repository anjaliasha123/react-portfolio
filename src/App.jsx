import "./styles.css";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Technical from "./components/technical/Technical";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Survey from "./components/survey/Survey";
import Menu from "./components/menu/Menu";
import "/src/App.scss";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
      <div className="sections">
        hsdadsa
        <Portfolio />
        <Technical />
        <Achievements />
        <Survey />
        <Contact />
      </div>
    </div>
  );
}
