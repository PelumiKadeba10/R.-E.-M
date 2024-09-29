import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Upcoming from "./components/Upcoming";
import All from "./components/All_events";
import Footer from "./components/footer";
import Edit from "./pages/Edit";
import Edit_Form from "./pages/Edit_Form";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={
          <>
            <Navbar />
            <div id="home">
              <Home />
            </div>
            <div id="upcoming">
              <Upcoming/>
            </div>
            <div id="all">
              <All/>
            </div>
            <Footer />
          </>
        } 
      />

        <Route path="/admin" element={<Admin />} />
        <Route path="/edit" element={<Edit />}/>
        <Route path="/form" element={<Edit_Form />}/>
      </Routes>
    </Router>
  );
}

export default App;
