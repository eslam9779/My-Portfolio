import './App.css';
import { About, AnimatedArrow, Home, Navbar, Scroll_nav, Skills } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <>
      <div className="gradient__bg" style={{ height: "100vh" }}>
        {/* <Scroll_nav/> */}
        <AnimatedArrow />

        <Navbar />
        <Home />
      </div>
      <About />
      <Skills />

    </>
  );
}

export default App;
