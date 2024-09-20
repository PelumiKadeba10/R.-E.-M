import CardEvent from "./event_card"

function Prev(){
    return(
        <div className="bg-slate-200 py-8">
            <p className="text-lg">Previous Events</p>
            <CardEvent />
        </div>
    )
}

export default Prev