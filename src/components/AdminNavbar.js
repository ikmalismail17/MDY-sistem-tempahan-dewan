import Logo from '../assets/images/logoMDY.png';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <>
        <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-none">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 pl-1">
                <p className="font-bold text-xl text-amber-400">eTempahDewan</p>
            </div>
            <div className="flex-none">
                <Link to='/'>
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
                </Link>
            </div>
            </div>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            <div className="divider"></div>
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
        </div>
        </>
    );
}

export default AdminNavbar;