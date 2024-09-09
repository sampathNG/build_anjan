import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Aboutus from "./components/Aboutus";
// import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homes } from "./pages/Home";
import { Planning } from "./pages/Planning";
import { Design } from "./pages/Design";
import { Award } from "./pages/Award";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/design" element={<Design />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
