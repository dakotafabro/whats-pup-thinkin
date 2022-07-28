import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import SubmitPupPic from "./components/SubmitPupPic";
import Home from "./components/Home";
import GalleryAllPups from "./components/GalleryAllPups";
import SinglePupView from "./components/SinglePupView";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/submit" element={<SubmitPupPic />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<GalleryAllPups />} />
        <Route exact path="/pup/:id" element={<SinglePupView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
