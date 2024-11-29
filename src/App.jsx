import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience  from "./Experience";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* Route for Skills */}
        <Route
          path="/skills"
          element={
            <>
              <Navbar />
              <Skills />
            </>
          }
        />
<Route
          path="/achievements"
          element={
            <>
              <Navbar />
              <Achievements />
            </>
          }
        />

<Route
          path="/education"
          element={
            <>
              <Navbar />
              <Education />
            </>
          }
        />

<Route
          path="/experience"
          element={
            <>
              <Navbar />
              <Experience />
            </>
          }
        />


      </Routes>
    </Router>
  );
}

export default App;
