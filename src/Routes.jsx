
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";


import Home from "components/Home";


const ProjectRoutes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;