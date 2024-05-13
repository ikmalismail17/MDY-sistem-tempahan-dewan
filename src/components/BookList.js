import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../assets/styles/BookList.css";
import Paper from "./Paper";
import { ModalAccept, ModalReject } from "./Modal";
import { useAuth } from "../providers/AuthProviders";
import { DatePicker } from 'rsuite';

const tempahDewan = [
    {
        id: 1,
        Nama: "Kamal",
        Dewan: "Dewan Lestari",
        Tarikh: "29/04/2024",
        Status: "Ditempah",
        Email: "kamal@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 2,
        Nama: "Afif",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "07/05/2024",
        Status: "Ditempah",
        Email: "afif@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 3,
        Nama: "Amirul",
        Dewan: "Dewan Lestari",
        Tarikh: "20/05/2024",
        Status: "Disahkan",
        Email: "zikri@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 4,
        Nama: "Syauqi",
        Dewan: "Dewan Lestari",
        Tarikh: "15/05/2024",
        Status: "Disahkan",
        Email: "syauqi@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 5,
        Nama: "Adam",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "20/06/2024",
        Status: "Ditempah",
        Email: "adam@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 3,
        Nama: "Amirul",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "13/06/2024",
        Status: "Ditempah",
        Email: "zikri@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
    {
        id: 6,
        Nama: "Yusuf",
        Dewan: "Dewan Dato' Madi",
        Tarikh: "30/04/2024",
        Status: "Ditolak",
        Email: "yusuf@gmail.com",
        Telefon: Math.floor(Math.random() * 10000000000)
    },
]
const BookList = () => {
    const {id} = useAuth();
    const [allList, setAllList] = useState(true);
    const [listDetail, setListDetail] = useState(false);
    const nodeRef = useRef(null);
    const [bookData, setBookData] = useState(null);

    const handleBookDetail = () => {
        setListDetail(!listDetail);
    }

    const handleBookData = (tempah) => {
        setBookData(tempah);
    }

    return (
        <>
        <CSSTransition
            in={listDetail}
            timeout={300}
            classNames="slidebook"
            nodeRef={nodeRef}
            onEnter={() => setAllList(false)}
            onExited={() => setAllList(true)}
            unmountOnExit
        >
            <div ref={nodeRef}>
                <BookListDetail book={handleBookDetail} bookData={bookData}/>
            </div>
        </CSSTransition>
        {allList && (
            <>
            <div className="mb-3">
                <DatePicker oneTap style={{ width: 200 }} placeholder="Select Date" size="lg"/>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
                <thead className="bg-slate-300">
                <tr>
                    <th></th>
                    <th>Nama</th>
                    <th>Dewan</th>
                    <th>Tarikh</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {id == 1 ? (
                    <>
                    {tempahDewan.map((tempah, index) => (
                        <tr key={tempah.id*index} className="hover">
                            <th>{index + 1}</th>
                            <td>{tempah.Nama} (Anda)</td>
                            <td>{tempah.Dewan}</td>
                            <td>{tempah.Tarikh}</td>
                            <td>
                            <div className={`badge ${
                                tempah.Status === "Ditempah" ? "badge-warning" :
                                tempah.Status === "Disahkan" ? "badge-success" :
                                "badge-error"
                            }`}>
                                {tempah.Status}
                            </div>
                            </td>
                            <td className="text-center">
                                <kbd className="cursor-pointer kbd" onClick={() => { handleBookDetail(); handleBookData(tempah);}}>
                                    Lanjutan
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                                    </svg>
                                </kbd>
                            </td>
                        </tr>
                    ))}
                    </>
                ):(
                    <>
                    {tempahDewan.filter(item => item.id == 3).map((tempah, index) => (
                        <tr key={tempah.id*index} className="hover">
                            <th>{index + 1}</th>
                            <td>{tempah.Nama} (Anda)</td>
                            <td>{tempah.Dewan}</td>
                            <td>{tempah.Tarikh}</td>
                            <td>
                            <div className={`badge ${
                                tempah.Status === "Ditempah" ? "badge-warning" :
                                tempah.Status === "Disahkan" ? "badge-success" :
                                "badge-error"
                            }`}>
                                {tempah.Status}
                            </div>
                            </td>
                        </tr>
                    ))}
                    </>
                )}
                </tbody>
            </table>
            </div>
            </>
        )}
        </>
    );
}

const BookListDetail = (props) => {

    const handleBookDetail = () => {
        props.book();
    }

    return (
        <>
        <div className="flex gap-4">
            <button onClick={handleBookDetail}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
            </svg>
            </button>
            <p className="text-xl font-bold">MAKLUMAT TEMPAHAN</p>
        </div>
        <Paper titleDewan="" custom={["px-10 pt-10 pb-5 my-3 bg-gray-300 space-y-4"]} customTitle={["text-2xl"]} titleBool={false}>
            <div className="overflow-auto">
            <table className="table border-4 border-separate border-slate-500">
                <tbody>
                <tr>
                    <th className="border-2 border-slate-500">NAMA</th>
                    <td className="border-2 border-slate-500">{props.bookData.Nama}</td>
                </tr>
                <tr>
                    <th className="border-2 border-slate-500">E-MAIL</th>
                    <td className="border-2 border-slate-500">{props.bookData.Email}</td>
                </tr>
                <tr>
                    <th className="border-2 border-slate-500">NO.TELEFON</th>
                    <td className="border-2 border-slate-500">{props.bookData.Telefon}</td>
                </tr>
                <tr>
                    <th className="border-2 border-slate-500">DEWAN</th>
                    <td className="border-2 border-slate-500">{props.bookData.Dewan}</td>
                </tr>
                <tr>
                    <th className="border-2 border-slate-500">TARIKH</th>
                    <td className="border-2 border-slate-500">{props.bookData.Tarikh}</td>
                </tr>
                <tr>
                    <th className="border-2 border-slate-500">STATUS</th>
                    <td className="border-2 border-slate-500">
                    <div className={`badge ${
                        props.bookData.Status === "Ditempah" ? "badge-warning" :
                        props.bookData.Status === "Disahkan" ? "badge-success" :
                        "badge-error"
                    }`}>
                        {props.bookData.Status}
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="flex justify-end">
                {props.bookData.Status === "Ditempah" && (
                <div className="join">
                    <button className="btn btn-error join-item" onClick={()=>document.getElementById('modal_reject_tempahan').showModal()}>Tolak</button>
                    <button className="btn btn-success join-item" onClick={()=>document.getElementById('modal_accept_tempahan').showModal()}>Sahkan</button>
                </div>
                )}
            </div>
            <ModalAccept/>
            <ModalReject/>
        </Paper>
        </>
    )
}

export default BookList;