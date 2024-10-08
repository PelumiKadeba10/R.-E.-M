import { useEffect, useState } from "react";
import Slider from "react-slick";
import CardEvent from "./event_card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
    const { className, onClick} = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  
//Retrieving data
function Current_month() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/events/current_month')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setData(data);
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

    if (!data || data.length === 0) {
        console.log('No events found:', data);  
        return (
        <div className="bg-white pb-20">
            <p className="text-2xl pt-8 pb-4 text-center text-[#382a76] font-bold">Events this Month</p>
            <div className="text-center font-semibold text-xl">No upcoming events.</div>;
        </div>
        )
    }

    //carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
              slidesToScroll: 1
            },
          },
        ],
      };

    return (
        <div className="bg-white pb-20">
            <p className="text-3xl pt-8 pb-4 text-center text-[#382a76] font-bold">Events this Month</p>
            <div className="mx-10 px-7 justify-center ">
                <Slider {...settings}>
                {data.map((event, index) => (
                    <div key={index} className="p-3">
                        <CardEvent
                        Title={event.title}
                        Theme={event.theme}
                        date={event.date}
                        location={event.venue}
                        time={event.time}/>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

export default Current_month;
