import Admin_Nav from "../components/Admin_Nav";
import Edit_event from "../components/Edit_content";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function Edit(){
    return(
       <>
            <Admin_Nav />
            <div className="justify-center items-center text-center pt-12 pb-8 bg-slate-100 ">
                <strong className="text-4xl">Welcome to the Edit page</strong>
                <p className="pt-4 pb-2 text-lg"> Click the event you need to edit in the section below and edit in the form provided</p>
                <p className="pb-4 text-lg">Click here to Create a new Event</p>
                <Link to="/form">
                    <button className="bg-[#281870] text-white py-2 px-5 rounded-lg hover:bg-slate-800">Create Event</button>
                </Link>
            </div>
            <Edit_event />
            <Footer />
       </> 
    )
}

export default Edit;