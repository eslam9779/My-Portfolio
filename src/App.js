import './App.css';
import { About, AnimatedArrow, Home, Navbar, Scroll_nav, Skills,Qualification,Portfolio } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";     

function App() {
  return (
    <>
      <div className="gradient__bg app" style={{ height: "100vh" }}>
        {/* <Scroll_nav/> */}
        <AnimatedArrow />

        <Navbar />
        <Home />
      </div>
      <About />
      <Skills />
      <Qualification/>
      <Portfolio/>

    </>
  );
}

export default App;
