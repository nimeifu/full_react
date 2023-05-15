// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
// import NotFound from "pages/NotFound";
// const LoginRegister = React.lazy(() => import("pages/LoginRegister"));
// const Timer = React.lazy(() => import("pages/Timer"));
// const About = React.lazy(() => import("pages/About"));
// const Homepage = React.lazy(() => import("pages/Homepage"));
// const ProjectRoutes = () => {
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/homepage" element={<Homepage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/timer" element={<Timer />} />
//           <Route path="/loginregister" element={<LoginRegister />} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };
// export default ProjectRoutes;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";


import Home from "components/Home";


const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;