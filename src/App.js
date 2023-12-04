import './App.css';
import { About, Home, Navbar, Scroll_nav } from './components/index';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <>
    <div className="gradient__bg"> 
      {/* <Scroll_nav/> */}
      <Navbar />
      <Home />
      <About/>

    </div>
    </>
  );
}

export default App;
