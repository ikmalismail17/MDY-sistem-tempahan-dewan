import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import "../assets/styles/MainSec.css";
import { Calendar, Badge } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import dayjs from 'dayjs';

const listDewan = [
    {
        title: "Dewan Dato' Madi",
        // img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        img: "https://fastly.4sqi.net/img/general/width960/LYBRK3IF2DLIAVDAUAI4FDVZOIOVVVEDDPFKIVKJDCVMZQGC.jpg",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di berdekatan dengan Majlis Daerah Yan.",
        bookdetails: [
            {
                dateBook: "4-18-2024",
                status: "disahkan",
            },
            {
                dateBook: "5-12-2024",
                status: "ditempah",
            },
            {
                dateBook: "5-15-2024",
                status: "disahkan",
            },
            {
                dateBook: "5-29-2024",
                status: "ditempah",
            },
        ]
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
        bookdetails: [
            {
                dateBook: "4-28-2024",
                status: "ditempah",
            },
            {
                dateBook: "5-16-2024",
                status: "disahkan",
            },
            {
                dateBook: "5-30-2024",
                status: "ditempah",
            },
            {
                dateBook: "6-3-2024",
                status: "ditempah",
            },
        ]
    },
];

const HallSec = (props) => {
    const [hallBool, setHallBool] = useState(false);
    const [showList, setShowList] = useState(true);
    const nodeRef = useRef(null);
    const [hallDetailData, setHallDetail] = useState({
        title: "",
        img: "",
        bookdetails: []
    });

    const handleHallDetailData = (title, img) => {
        setHallDetail({
            title: title,
            img: img,
            bookdetails: listDewan.find(dewan => dewan.title === title).bookdetails
        });
    }

    const handleHallBool = () => {
        setHallBool(!hallBool);
        setHallDetail({
            title: "",
            img: "",
            bookdetails: []
        });
    }

    const handleImageIndex = (img) => {
        props.setImgIndex(img);
    }

    const handleTitleDewan = () => {
        props.setTitleDewan();
    }

    return (
        <>
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
                <HallSecDetail hall={handleHallBool} setTitleDewan={handleTitleDewan} datadetail={hallDetailData} />
            </div>
        </CSSTransition>
        {showList && (
            <div className={`${listDewan.length > 2 ? 'columns-3':'columns-2'} gap-x-4 p-4`}>
                {listDewan.map((dewan) => (
                    <div
                        key={dewan.title}
                        className={`card image-full card-compact w-96 glass shadow-xl shadow-gray-600 hover:shadow-emerald-600 hover:scale-110 mb-7 mx-1 transition-transform duration-300 ease-in-out`}
                        onMouseEnter={() => handleImageIndex(dewan.img)}
                        onMouseLeave={() => handleImageIndex(null)}
                    >
                        <figure className="h-64 overflow-hidden">
                            <img
                                src={dewan.img}
                                alt={dewan.title}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                {dewan.title.toUpperCase()}
                            </h2>
                            <p>{dewan.desc}</p>
                            <div className="card-actions justify-end">
                                <button className="btn" onClick={() => { handleHallBool(); handleTitleDewan(); handleHallDetailData(dewan.title, dewan.img); }}>Lihat Kalendar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </>
    );
}

const HallSecDetail = (props) => {

    const renderCell = (date) => {
        const formattedDate = dayjs(date).format('DD-MM-YYYY'); // Format the current date as "DD-MM-YYYY" for comparison
    
        const matchingDates = props.datadetail.bookdetails.filter(item => {
            // Convert the item's date to "DD-MM-YYYY" format for comparison
            const formattedItemDate = dayjs(item.dateBook).format('DD-MM-YYYY');
            return formattedItemDate === formattedDate;
        });
    
        if (matchingDates.length > 0) {
            // Display badges for matching dates
            return (
                <div>
                    {matchingDates.map((item, index) => (
                        <Badge key={index} color={item.status === 'disahkan' ? 'green' : 'orange'} content={item.status === 'disahkan' ? 'Disahkan' : 'Ditempah'} />
                    ))}
                </div>
            );
        }
        return null;
    };
    

    const handleDetailHall = () => {
        props.hall();
    }

    const handleTitleDewan = () => {
        props.setTitleDewan();
    }

    return (
        <>
        <div className="flex place-content-between">
            <button className="btn glass mt-1" onClick={() => {handleDetailHall(); handleTitleDewan();}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
            </svg>
            </button>
            <div role="alert" className="alert alert-info w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Log masuk dahulu untuk melakukan tempahan dewan !!</span>
            </div>
        </div>
        <div className="hero-content flex-col lg:flex-row">
        <div className="mockup-browser border border-base-300 shadow-lg bg-amber-400">
        <div className="mockup-browser-toolbar">
            <div className="input">{props.datadetail.title}</div>
        </div>
        <div className="flex px-2 py-2 bg-blue-600">
            <div className='border rounded-lg bg-slate-200 w-auto'>
                <Calendar bordered renderCell={renderCell}/>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default HallSec;