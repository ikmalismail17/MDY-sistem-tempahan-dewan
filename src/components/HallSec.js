import React from 'react';
import Paper from '../components/Paper';

const listDewan = [
    {
        title: "Dewan Dato' Madi",
        img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di kawasan Majlis Daerah Yan.",
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
    },
    {
        title: "Dewan Dato' Madi",
        img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di kawasan Majlis Daerah Yan.",
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
    },
];

const HallSec = () => {
    return (
    <div className="hero min-h-screen bg-slate-100 hover:bg-slate-200">
    <Paper title="Kalendar Tempahan" custom={["p-10"]} titleBool={true}>
        <div className="hero-content flex-col lg:flex-row">
            {listDewan.map((dewan) => (
                <div className="card card-compact w-96 glass shadow-xl shadow-gray-600 hover:shadow-emerald-600">
                <figure><img src={dewan.img} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{dewan.title.toUpperCase()}</h2>
                    <p>{dewan.desc}</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Lihat</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </Paper>
    </div>
    );
}

export default HallSec;