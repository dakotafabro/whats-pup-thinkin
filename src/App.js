import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import SubmitPupPic from "./components/SubmitPupPic";
import Home from "./components/Home";
import GalleryAllPups from "./components/GalleryAllPups";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1>What's Pup Thinkin'?</h1>
      </main>
      <Routes>
        <Route exact path="/submit" element={<SubmitPupPic />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<GalleryAllPups />} />
      </Routes>
    </div>
  );
}

export default App;
