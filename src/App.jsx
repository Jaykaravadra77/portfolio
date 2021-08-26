import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
// import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar key="1" menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu key="2" menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro key="3"/>
       <Portfolio key="4"/>
       {/* <Works/> */}
       {/* <Testimonials/> */}
       <Contact key="5"/>
     </div>
    </div>
  );
}

export default App;
