import Logo from '../assets/images/logoMDY.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="navbar glass shadow-xl" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
            <div className="navbar-start first:pl-2">
                <div className="tooltip tooltip-right" data-tip="Majlis Daerah Yan">
                <div className="avatar">
                    <div className="w-16 mask mask-squircle" >
                        <img src={Logo} alt='Majlis Daerah Yan' />
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar-center">
                <p className="font-bold text-xl text-amber-400">eTempahDewan</p>
            </div>
            <div className="navbar-end last:pr-2">
                <Link to='/logmasuk'>
                    <div className='tooltip tooltip-bottom' data-tip="Log Masuk">
                    <button className="btn rounded-full hover:bg-neutral-content">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </button>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Navbar;