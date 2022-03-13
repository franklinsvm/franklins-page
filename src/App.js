import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from "./Components/NavBar"

function App() {
  return (
   <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
