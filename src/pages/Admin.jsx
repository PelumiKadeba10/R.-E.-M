import Admin_Nav from "../components/Admin_Nav";
import Footer from "../components/footer";
import All from "./../components/All_events";

function Admin(){
    return(
        <>
            <Admin_Nav /> 
            <div className="text-center bg-slate-100 pt-16 pb-6">
                <h1 className="font-bold text-4xl p-8 text-[#382A76]">Welcome Admin</h1>
                <p className="text-lg pb-20">
                    You've successfully logged into the admin dashboard. From here you can,  
                    <ol className="p-2">
                        <li>View and edit event content</li>
                    </ol>
                    If you need any assistance, please don't hesitate to contact our support team at the address below.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Admin;