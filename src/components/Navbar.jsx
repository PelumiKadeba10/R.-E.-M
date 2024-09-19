import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className='bg-white sticky inset-x-0 pr-5 py-6  pl-7 flex justify-between border-b-1 font-inter'>
        <div className='flex items-center'>
            <img src={logo} alt="Logo" className='h-24 w-24'/>
            <p className="text-l text-[#382a76] font-semibold pl-3">
                The Redeemed Christain Church of God
            </p>
        </div>
        <ol className='flex space-x-14 text-sm text-slate-950'>
            <button className=""><li>Home</li></button>
            <button className=""><li>Previous Events</li></button>
            <button className=""><li>Upcoming events</li></button>
        </ol>
    </nav>
  )
}

export default Navbar
