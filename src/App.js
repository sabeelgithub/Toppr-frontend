import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ClientRoutes from "./Routes/ClientRoutes";
import ExpertRoutes from "./Routes/ExpertRoutes";
import 'react-toastify/dist/ReactToastify.css';
import AdminRoutes from "./Routes/AdminRoutes";
function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/*" Component={ClientRoutes}/>
        <Route path="/expert/*" Component={ExpertRoutes}/>
        <Route path="/admin/*" Component={AdminRoutes}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
