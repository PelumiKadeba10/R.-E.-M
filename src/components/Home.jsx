import CardEvent from "./event_card";
import Badge from "./badge";

function Home() {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-5 md:pb-8 md:px-16 space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-[#382a76] text-5xl md:text-6xl font-bold leading-tight">
            RCCG EVENT MANAGER
          </h1>
          <p className="pt-8 text-base md:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt efficitur nulla, at aliquet justo pharetra id. Vivamus vel tortor nec nunc finibus fermentum.
          </p>
          <Badge />
        </div>

        {/* Right Section */}
        <div className="py-8 md:w-3/6 md:justify-center">
          <CardEvent 
          Title="Holy Ghost Service"
          Theme="The Divine Favour"
          date="19th, October,2024"
          location="Redemption Camp"
          time="9 am"
          />
        </div>
      </div>
    );
  }
  
  export default Home;
  