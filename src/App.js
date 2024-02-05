import Navbar from "./Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/team":
      component = <Team />
      break
    case "/projects":
      component = <Projects />
      break
    case "/events":
      component = <Events />
      break
    case "/sponsors":
      component = <Sponsors />
      break
  }
  return (
  <>
    <Navbar />
    {component}
  </>
  )
}

export default App;
