import { Link } from "react-router-dom";
import { useState } from "react";
import HallSec from "./HallSec";
import React from 'react';
import Paper from '../components/Paper';

const MainSec = () => {
    const [imgIndex, setImgIndex] = useState(null);
    const [titleDewan, setTitleDewan] = useState(false);

    const handleImgIndex = (img) => {
        setImgIndex(`url(${img})`);
    }

    const handleTitleDewan = () => {
        setTitleDewan(!titleDewan);
    }

    return (
    <>
    <div className="hero min-h-screen relative overflow-hidden">
    <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed"
        style={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        }}
    ></div>
    <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">SELAMAT DATANG</h1>
        <p className="mb-5">Sistem untuk tempahan dewan secara atas talian yang disediakan oleh Majlis Daerah Yan.</p>
        <Link to="/logmasuk">
            <button className="btn glass btn-primary">Tempah Sekarang!!</button>
        </Link>
        </div>
    </div>
    </div>
    <div className="hero min-h-screen bg-slate-100 hover:bg-slate-200" style={{backgroundImage: imgIndex}}>
        <div className="hero-content flex-col lg:flex-row">
        <Paper titleDewan={titleDewan ? "Kalendar Tempahan" : "Senarai Dewan"} custom={["p-10 my-7 bg-slate-50"]} customTitle={["text-xl"]} titleBool={true}>
            <HallSec setImgIndex={handleImgIndex} setTitleDewan={handleTitleDewan}/>
        </Paper>
        </div>
    </div>
    </>
    );
}

export default MainSec;