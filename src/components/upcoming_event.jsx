import React, { useEffect, useState } from "react";
import CardEvent from "./event_card";

function Upcoming_section() {
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
        <div className="bg-slate-50 pb-20">
            <p className="text-2xl pt-8 pb-4 text-center text-[#382a76] font-bold">Events this Month</p>
            <div className="text-center font-semibold text-xl">No upcoming events.</div>;
        </div>
        )
    }
    
    return (
        <div className="bg-slate-50 pb-20">
            <p className="text-3xl pt-8 pb-4 text-center text-[#382a76] font-bold">Events this Month</p>
            <div className="grid grid-cols-1 gap-8 justify-center mx-10 px-7 md:grid md:grid-cols-3">
                {data.map((event) => (
                    <CardEvent 
                        Title={event.title}
                        Theme={event.theme}
                        date={event.date}
                        location={event.venue}
                        time={event.time}
                    />
                ))}
            </div>
        </div>
    );
}

export default Upcoming_section;
