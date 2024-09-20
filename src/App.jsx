import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Prev from "./components/previous_events";
import Upcoming_section from "./components/upcoming_event";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="upcoming-events">
        <Upcoming_section />
      </div>
      <div id="previous-events">
        <Prev />
      </div>
      <Footer />
    </>
  );
}

export default App;
