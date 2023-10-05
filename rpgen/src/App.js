import Home from "./components/Home/Home";
import Character from "./components/Character/Character";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
