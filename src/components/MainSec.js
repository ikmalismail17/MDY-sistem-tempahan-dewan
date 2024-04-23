import HallSec from "./HallSec";

const MainSec = () => {
    

    return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">SELAMAT DATANG</h1>
            <p className="mb-5">Sistem untuk tempahan dewan secara atas talian yang disediakan oleh Majlis Daerah Yan.</p>
            <button className="btn glass btn-primary">Tempah Sekarang!!</button>
            </div>
        </div>
    </div>
    <HallSec />
    </>
    );
}

export default MainSec;