import { Link } from "react-router-dom";
import Admin_Nav from "../components/Admin_Nav";

function Form(){
    return(
        <>
        <Admin_Nav />
        
        <div>
            <Link to="/edit">
            <button className="bg-[#281870] text-white py-2 px-4 rounded-lg hover:bg-slate-800">
                Go back
            </button>
            </Link>
        </div>
        </>
    )
}
export default Form