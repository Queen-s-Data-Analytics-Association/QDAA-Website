import Navbar from "./Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom"
import {Helmet} from 'react-helmet';

function App() {
  return (
  <>
    <Navbar />
    <Helmet>
      <style>{'body { background-color: #37517e; }'}</style>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </Helmet>
  </>
  )
}

export default App;
