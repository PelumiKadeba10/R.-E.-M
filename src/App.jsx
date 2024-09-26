import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Upcoming from "./components/upcoming";
import All from "./components/All_events";
import Current_month from "./components/current_month";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="upcoming">
        <Upcoming />
      </div>
      <div id="all">
        <All />
      </div>
      <Footer />
    </>
  );
}

export default App;
