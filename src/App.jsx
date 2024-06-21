//import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from "./pages/Menu";
import Pagenotfound from './pages/Pagenotfound';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/restaurant_app_react_mui/" element={<Home />} />
          <Route path="/restaurant_app_react_mui/home" element={<Home />} />
          <Route path="/restaurant_app_react_mui/about" element={<About />} />
          <Route
            path="/restaurant_app_react_mui/contact"
            element={<Contact />}
          />
          <Route path="/restaurant_app_react_mui/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
