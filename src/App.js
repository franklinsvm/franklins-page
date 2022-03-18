import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Portfolio from "./Pages/Portfolio";
import NavBar from "./Components/NavBar"

function App() {
  return (
   <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
