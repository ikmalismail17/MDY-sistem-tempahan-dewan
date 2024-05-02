import { Link } from "react-router-dom";
import HallSec from "./HallSec";
import React from 'react';

const imagebg = {
    img: '../assets/images/dewanlestari1.jpg',
    img: '../assets/images/dewanlestari2.jpg',
    img: '../assets/images/dewanlestari3.jpg',
}

const MainSec = () => {
    return (
    <>
    <div className="hero min-h-screen relative overflow-hidden">
    <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed"
        style={{
        backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
    ></div>
    <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">SELAMAT DATANG</h1>
        <p className="mb-5">Sistem untuk tempahan dewan secara atas talian yang disediakan oleh Majlis Daerah Yan.</p>
        <Link to="/signin">
            <button className="btn glass btn-primary">Tempah Sekarang!!</button>
        </Link>
        </div>
    </div>
    </div>
    <HallSec/>
    </>
    );
}

export default MainSec;