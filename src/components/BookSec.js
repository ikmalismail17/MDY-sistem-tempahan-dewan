import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import "../assets/styles/MainSec.css";
import { Calendar, Badge } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import dayjs from 'dayjs';
import { ModalLihatTempahan, ModalTempahan } from './Modal';
import { useAuth } from '../providers/AuthProviders';
import useFetchData from '../hooks/useFetchData';

const listDewan = [
    {
        title: "Dewan Dato' Madi",
        // img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        img: "https://fastly.4sqi.net/img/general/width960/LYBRK3IF2DLIAVDAUAI4FDVZOIOVVVEDDPFKIVKJDCVMZQGC.jpg",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di berdekatan dengan Majlis Daerah Yan.",
        bookdetails: [
            {
                id: 2,
                nama: "Afif",
                dateBook: "4-18-2024",
                status: "disahkan",
                email: "afif@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {
                id: 5,
                nama: "Adam",
                dateBook: "5-12-2024",
                status: "ditempah",
                email: "adam@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {
                id: 6,
                nama: "Yusuf",
                dateBook: "5-15-2024",
                status: "disahkan",
                email: "yusuf@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {   
                id: 7,
                nama: "Izzat",
                dateBook: "5-29-2024",
                status: "ditempah",
                email: "izzat@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
        ]
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
        bookdetails: [
            {
                id: 1,
                nama: "Kamal",
                dateBook: "4-28-2024",
                status: "ditempah",
                email: "kamal@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {
                id: 3,
                nama: "Zikri",
                dateBook: "5-16-2024",
                status: "disahkan",
                email: "zikri@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {
                id: 4,
                nama: "Syauqi",
                dateBook: "5-30-2024",
                status: "ditempah",
                email: "syauqi@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
            {
                id: 8,
                nama: "Iffat",
                dateBook: "6-3-2024",
                status: "ditempah",
                email: "iffat@gmail.com",
                telefon: Math.floor(Math.random() * 10000000000)
            },
        ]
    },
];

const HallSec = (props) => {
    // const { data, loading, error } = useFetchData('http://localhost:8080/api/dewandisplay');
    const { role } = useAuth();
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
            <div className='px-4'>
            {role != 1 && (
                <>
                <div className="badge badge-info gap-2 p-5 w-full rounded-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                    Sila ke Pejabat Majlis Daerah Yan untuk melakukan pembayaran
                </div>
                </>
            )}
            <div className={`lg:columns-2 gap-x-4 py-4`}>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )}
        </>
    );
}

const HallSecDetail = (props) => {
    const { role } = useAuth();
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookData, setBookData] = useState([]);

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

    const handleDateSelectAdmin = (date) => {
        const formattedDate = dayjs(date).format('DD-MM-YYYY');
        setSelectedDate(formattedDate);

        if(props.datadetail.bookdetails.find(item => dayjs(item.dateBook).format('DD-MM-YYYY') === formattedDate)){
            setBookData(props.datadetail.bookdetails.find(item => dayjs(item.dateBook).format('DD-MM-YYYY') === formattedDate));
            document.getElementById('modal_lihat_tempahan').showModal();
        }else{
            alert('Tarikh ini tiada tempahan');
        }
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
        <div className="flex">
            <button className="btn glass mt-1 h-full" onClick={() => {handleDetailHall();}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
            </svg>
            </button>
            {role != 1 && (
                <>
                <div className="badge badge-info gap-2 p-4 w-full h-full rounded-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                    Sila ke Pejabat Majlis Daerah Yan untuk melakukan pembayaran
                </div>
                </>
            )}
        </div>
        <div className="hero-content flex-col lg:flex-row">
        <div className="mockup-browser border border-base-300 shadow-lg bg-amber-400">
        <div className="mockup-browser-toolbar">
            <div className="input">{props.datadetail.title}</div>
        </div>
        <div className="flex px-2 py-2 bg-blue-600">
            <div className='border rounded-lg bg-slate-200 w-auto'>
                {role == 1 ? (
                    <>
                    <Calendar bordered renderCell={renderCell} onSelect={handleDateSelectAdmin}/>
                    </>
                ):(
                    <>
                    <Calendar bordered renderCell={renderCell} onSelect={handleDateSelect}/>
                    </>
                )}
                
            </div>
        </div>
        </div>
        </div>
        <ModalTempahan date={selectedDate} name={props.datadetail.title}/>
        <ModalLihatTempahan data={bookData} date={selectedDate} title={props.datadetail.title}/>
        </>
    );
}

export default HallSec;