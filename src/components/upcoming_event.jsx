import CardEvent from "./event_card"

function Upcoming_section(){
    return(
        <div className="bg-slate-50 pb-20">
            <p className="text-2xl pt-8 pb-4 text-center text-[#382a76] font-bold">Upcoming Events</p>
            <div className="grid grid-cols-1 gap-8 justify-center mx-10 px-10 md:sgrid md:grid-cols-3 ">
                <CardEvent 
                Title="Holy Ghost Service"
                Theme="The Divine Favour"
                date="19th, October,2024"
                location="Redemption Camp"
                time="9 am"
                />
                <CardEvent 
                Title="Holy Ghost Service"
                Theme="The Divine Favour"
                date="19th, October,2024"
                location="Redemption Camp"
                time="9 am"
                />
                <CardEvent 
                Title="Holy Ghost Service"
                Theme="The Divine Favour"
                date="19th, October,2024"
                location="Redemption Camp"
                time="9 am"
                />
            </div>
        </div>
    )
}

export default Upcoming_section