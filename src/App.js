import "./styles.css";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Technical from "./components/technical/Technical";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Survey from "./components/survey/Survey";
import "/src/App.scss";

export default function App() {
  return (
    <div className="app">
      <Topbar />
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
