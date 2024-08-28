import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
// import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/img.png";
import { Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import Judge from "./pages/Judge/Judge";
import Financials from "./pages/Financials/Financials";
import FAQ from "./pages/FAQ/FAQ";
import ApplyOpen from "./pages/ApplyOpen/ApplyOpen";
import PastWinners from "./pages/PastWinners/PastWinners";
import Profile from "./pages/Profile/Profile";
import Scholarships from "./pages/Scholarships/Scholarships";
import Sponsor from "./pages/Sponsor/Sponsor";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import HeaderHome from "./components/HeaderHome/HeaderHome";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/past-winners" element={<PastWinners />} />
        <Route path="/judge" element={<Judge />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
