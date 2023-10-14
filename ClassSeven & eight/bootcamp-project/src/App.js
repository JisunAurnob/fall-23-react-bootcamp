import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUs";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUS />} />
    </Routes>
  );
}

export default App;
