import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Prev from "./components/previous_events";
import Upcoming_section from "./components/upcoming_event";

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Upcoming_section />
      <Prev />
    </>
  );
}

export default App
