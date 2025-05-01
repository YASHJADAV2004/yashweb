import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav1 from "./Componet/Nav1";
import Sec1 from "./Componet/Sec1";
import Sec2 from "./Componet/Sec2";
import Sec3 from "./Componet/Sec3";
import Footer1 from "./Componet/Footer1";
import Moviee from "./Componet/Moviee";
import Tvshow from "./Componet/Tvshow"; // Import Tvshow component
import Livetv from "./Componet/Livetv";
import Subscriptions from "./Componet/Subscriptions";

const App = () => {
  return (
    <Router>
      <Nav1 />
      <Routes>
        <Route path="/" element={
          <>
            <Sec1 />
            <Sec2 />
            <Sec3 />
          
          </>
        } />
        <Route path="/movies" element={<Moviee />} />
        <Route path="/tvshows" element={<Tvshow />} /> {/* Add route for TV Shows */}
        <Route path="/livetv" element={<Livetv />} /> {/* Add route for live tv */}
        <Route path="/subscriptions" element={<Subscriptions/>}/>   {/* Add route for Subsciptions */}
      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;
