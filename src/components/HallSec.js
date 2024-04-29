import React, {useState, useRef} from 'react';
import Paper from '../components/Paper';
import { CSSTransition } from 'react-transition-group';
import "../assets/styles/MainSec.css";
import "../assets/styles/Calendar.css";
// import { Calendar } from 'rsuite';

import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
const localizer = dayjsLocalizer(dayjs)

const listDewan = [
    {
        title: "Dewan Dato' Madi",
        img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di berdekatan dengan Majlis Daerah Yan.",
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
    },
];

const HallSec = () => {
    const [imgIndex, setImgIndex] = useState(null);
    const [hallBool, setHallBool] = useState(false);
    const [showList, setShowList] = useState(true);
    const nodeRef = useRef(null);
    const [hallDetailData, setHallDetail] = useState({
        title: "",
        img: "",
        // details:{}
    });

    const handleHallDetailData = (title, img) => {
        setHallDetail({
            title: title,
            img: img
        });
    }

    const handleHallBool = () => {
        setHallBool(!hallBool);
    }

    return (
        <div className='artboard'>
        <div className="hero min-h-screen bg-slate-100 hover:bg-slate-200" style={{backgroundImage: imgIndex}}>
            
                <CSSTransition
                    in={hallBool}
                    timeout={300}
                    classNames="slide"
                    nodeRef={nodeRef}
                    onEnter={() => setShowList(false)}
                    onExited={() => setShowList(true)}
                    unmountOnExit
                >
                    <div ref={nodeRef}>
                        <HallSecDetail hall={handleHallBool} datadetail={hallDetailData} />
                    </div>
                </CSSTransition>
                {showList && (
                <Paper title="Senarai Dewan" custom={["p-10 my-5 "]} customTitle={["text-2xl"]} titleBool={true}>
                    <div className="hero-content flex-col lg:flex-row">
                    <div className={`${listDewan.length > 2 ? 'columns-3':'columns-2'} gap-x-4`}>
                        {listDewan.map((dewan, index) => (
                            <div
                                key={index}
                                className={`card image-full card-compact w-96 glass shadow-xl shadow-gray-600 hover:shadow-emerald-600 hover:scale-110 mb-7 mx-1 transition-transform duration-300 ease-in-out`}
                                onMouseEnter={() => setImgIndex(`url(${dewan.img})`)}
                                onMouseLeave={() => setImgIndex(null)}
                            >
                                <figure className="h-64 overflow-hidden">
                                    <img
                                        src={dewan.img}
                                        alt="car!"
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        {dewan.title.toUpperCase()}
                                    </h2>
                                    <p>{dewan.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn" onClick={() => { handleHallBool(); handleHallDetailData(dewan.title, dewan.img); }}>Lihat Kalendar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    </Paper>
                )}
        </div>
        </div>
    );
}

const HallSecDetail = (props) => {

    const handleDetailHall = () => {
        props.hall();
    }

    return (
        <>
        <Paper title="Kalendar Tempahan" custom={["p-10 my-5 "]} customTitle={["text-2xl"]} titleBool={true}>
            <button className="btn glass" onClick={handleDetailHall}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
            </svg>
            </button>
            <div className="hero-content flex-col lg:flex-row">
            <div className="mockup-browser border border-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">{props.datadetail.title}</div>
            </div>
            <div className="flex px-2 py-2 bg-base-200">
                <div className='calendar-container'>
                <Calendar
                localizer={localizer}
                events={""}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
                </div> 
            </div>
            </div>
            </div>
        </Paper>
        </>
    );
}

export default HallSec;