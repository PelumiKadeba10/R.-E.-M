import CardEvent from "./event_card";
import Badge from "./badge";

function Home() {
    return (
      <div className="items-center py-10 px-10 md:pb-8 md:pl-20 md:pr-16 space-y-8">
        {/* Left Section */}
        <div className="text-center">
          <h1 className="text-[#382a76] text-5xl md:text-6xl font-bold leading-tight">
            RCCG EVENT MANAGER
          </h1>
          <p className="pt-8 text-lg md:text-lg text-gray-600">
          Welcome to the RCCG Event Manager! Stay up to date with our upcoming services, conferences, and special programs. Our platform allows you to view details of past and upcoming events, including event themes, dates, venues, and times. Join us as we organize impactful gatherings that bring people closer to God and foster a strong sense of community. Explore, participate, and stay connected!
          </p>
          <div className="pt-6">
          <Badge />
          </div>
        </div>

        {/* Right Section stuff
        <div className="px-10">
          <h1 className="pb-6 text-3xl font-bold text-center text-[#382a76]">Latest Event</h1>
          <CardEvent 
          Title="Holy Ghost Service"
          Theme="The Divine Favour"
          date="19th, October,2024"
          location="Redemption Camp"
          time="9 am"
          />
        </div> */}
      </div>
    );
  }
  
  export default Home;
  