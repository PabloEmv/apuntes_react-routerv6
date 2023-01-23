import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersPage from "./pages/UsersPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserPage />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>welcome</p>} />
          <Route path="bye" element={<p>bye</p>} />
        </Route>

        {/* Navigate, para redireccionar al url, en versiones anteriores conocido como redirect. replace hace que no se pueda volver a la ruta de /usuarios en este caso, cuando uno presiona volver en la pagina */}
        <Route path="/usuarios" element={<Navigate replace to="/users" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
