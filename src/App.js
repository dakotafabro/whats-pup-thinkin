import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import SubmitPupPic from "./components/SubmitPupPic";
import Home from "./components/Home";
import GalleryAllPups from "./components/GalleryAllPups";
import SinglePupView from "./components/SinglePupView";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BackToTop>
        <Routes>
          <Route exact path="/submit" element={<SubmitPupPic />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<GalleryAllPups />} />
          <Route exact path="/pup/:id" element={<SinglePupView />} />
        </Routes>
      </BackToTop>
      <Footer />
    </div>
  );
}

export default App;
