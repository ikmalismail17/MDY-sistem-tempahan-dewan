import Logo from '../assets/images/logoMDY.png';

const Navbar = () => {
    return (
        <>
        <div className="navbar glass" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
            <div className="navbar-start">
                <div className="avatar">
                    <div className="tooltip" data-tip="hello">
                        <div className="w-16 mask mask-squircle" >
                            <img src={Logo} alt='Majlis Daerah Yan' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <p className=" text-xl">eTempahDewan</p>
            </div>
            <div className="navbar-end">
                <button className="btn bg-neutral-content">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    Log Masuk
                </button>
            </div>
        </div>
        </>
    );
}

export default Navbar;