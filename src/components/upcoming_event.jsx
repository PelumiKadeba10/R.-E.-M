import CardEvent from "./event_card"

function Upcoming_section(){
    return(
        <div className="bg-slate-100 p-4">
            <p className="text-lg">Upcoming Events</p>
            <CardEvent />
        </div>
    )
}

export default Upcoming_section