import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DisplayPicture from "./DisplayPicture";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="displaypicture" element={<DisplayPicture />} />
      </Routes>
    </Router>
  );
}

export default App;
