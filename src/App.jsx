import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import About from "./pages/About";
import News from "./pages/News";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <>
          <Home />
          <About />
          <News />
        </>
      )}
      {location.pathname === '/registrasi' && <Registration />}
    </>
  );
};

function App() {
  return (
    <div className='h-auto'>
      <Router>
        <Headers />
        <Routes>
          <Route path='/*' element={<AppContent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
