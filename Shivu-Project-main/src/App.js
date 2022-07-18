import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import ListEng from './components/ListEng';
import ListHindi from './components/ListHindi';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
        <Navbar title={"Tunify"}/>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route path = "/dash" element = {<Dashboard />} />
          <Route path = "/english" element = {<ListEng />} />
          <Route path = "/hindi" element = {<ListHindi />} />
          <Route path = "/about" element = {<About />} />
          {/* <Navigate to = "/" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
