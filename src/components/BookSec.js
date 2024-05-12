import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import "../assets/styles/MainSec.css";
import { Calendar, Badge } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import dayjs from 'dayjs';
import { ModalTempahan } from './Modal';

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

    return (
        <>
        <CSSTransition
            in={hallBool}
            timeout={300}
            classNames="slidemain"
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
            <div className={`lg:columns-2 gap-x-4 p-4`}>
                {listDewan.map((dewan,index) => (
                    <div 
                        className="h-64 card hover:bg-slate-200 mb-3 lg:card-side bg-base-100 shadow-xl shadow-gray-600 hover:shadow-emerald-600 hover:scale-90 transition-transform duration-300 ease-in-out"
                        key={dewan.title}
                    >
                        <figure className='w-80 overflow-hidden'><img src={dewan.img} alt={dewan.title} className='w-full h-full object-cover'/></figure>
                        <div className="card-body">
                        <h2 className="card-title font-bold">{dewan.title.toUpperCase()}</h2>
                        <p>{dewan.desc}</p>
                        <div className="card-actions justify-end">
                            <button className="btn glass" onClick={() => { handleHallBool(); handleHallDetailData(dewan.title, dewan.img); }}>
                                Lihat Kalendar
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </button>
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
    const [selectedDate, setSelectedDate] = useState(null);

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

    const handleDateSelect = (date) => {
        const formattedDate = dayjs(date).format('DD-MM-YYYY');
        setSelectedDate(formattedDate);
        if(props.datadetail.bookdetails.find(item => dayjs(item.dateBook).format('DD-MM-YYYY') === formattedDate)){
            alert('Tarikh ini telah ditempah');
        }else{
            document.getElementById('modal_tempahan_dewan').showModal();
        }
        
    }

    return (
        <>
        <div className="flex place-content-between">
            <button className="btn glass mt-1" onClick={() => {handleDetailHall();}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
            </svg>
            </button>
        </div>
        <div className="hero-content flex-col lg:flex-row">
        <div className="mockup-browser border border-base-300 shadow-lg bg-amber-400">
        <div className="mockup-browser-toolbar">
            <div className="input">{props.datadetail.title}</div>
        </div>
        <div className="flex px-2 py-2 bg-blue-600">
            <div className='border rounded-lg bg-slate-200 w-auto'>
                <Calendar bordered renderCell={renderCell} onSelect={handleDateSelect}/>
            </div>
        </div>
        </div>
        </div>
        <ModalTempahan date={selectedDate} title={props.datadetail.title}/>
        </>
    );
}

export default HallSec;