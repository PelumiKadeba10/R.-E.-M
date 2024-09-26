import { useEffect, useState } from "react";
import Slider from "react-slick";
import CardEvent from "./event_card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, onClick } = props;
  return (
      <div
          className={className}
          onClick={onClick}
      />
  );
}

// Function to group events by month-
function groupEventsByMonth(events) {
    const grouped = events.reduce((acc, event) => {
        const eventMonth = event.month;  
        if (!acc[eventMonth]) {
            acc[eventMonth] = [];
        }
        acc[eventMonth].push(event);
        return acc;
    }, {});
    return grouped;
}

// Retrieving data
function All() {
    const [groupedEvents, setGroupedEvents] = useState(null);  // New state to hold grouped events
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/events/all')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                const grouped = groupEventsByMonth(data);  // Group events by month
                setGroupedEvents(grouped);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!groupedEvents || Object.keys(groupedEvents).length === 0) {
        console.log('No events found:', groupedEvents);
        return (
            <div className="bg-white pb-20">
                <p className="text-2xl pt-8 pb-4 text-center text-[#382a76] font-bold">All Events</p>
                <div className="text-center font-semibold text-xl">No events.</div>
            </div>
        );
    }

    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-white pb-20">
            <p className="text-3xl pt-8 pb-4 text-center text-[#382a76] font-bold">All Events</p>
            {Object.keys(groupedEvents).map((month, index) => (
                <div key={index} className="mx-10 px-7 justify-center mb-12">
                    {/* Month heading */}
                    <h2 className="text-2xl font-bold mb-4 text-[#382a76] text-center">{month}</h2>
                    {/* Carousel for the month */}
                    <Slider {...settings}>
                        {groupedEvents[month].map((event, idx) => (
                            <div key={idx} className="p-3">
                                <CardEvent
                                    Title={event.title}
                                    Theme={event.theme}
                                    date={event.date}
                                    location={event.venue}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
}

export default All;
