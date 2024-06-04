import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../assets/styles/BookList.css";
import Paper from "./Paper";
import { ModalAccept, ModalReject, ModalRevert } from "./Modal";
import { useAuth } from "../providers/AuthProviders";
import { DatePicker } from 'rsuite';
import useFetchData from "../hooks/useFetchData";
import axios from "axios";

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
// const tempahDewan = [
//     {
//         "order_id": 1,
//         "order_desc": "",
//         "order_explain": null,
//         "order_date": "2024-05-05",
//         "dewan_order_date": "2024-05-10",
//         "order_status": "Ditempah",
//         "user": {
//         "user_id": 1,
//         "user_name": "Kamal Adli",
//         "user_email": "kamaladli@gmail.com",
//         "user_phone": "0135728839"
//         },
//         "dewan": {
//         "dewan_id": 1,
//         "dewan_name": "Dewan Dato' Madi",
//         "dewan_desc": "Dewan Dato' Madi merupakan dewan yang terletak berdekatan dengan Majlis Daerah Yan.",
//         "dewan_location": "7, Jalan Pantai Murni, Kampung Pantai Murni, 06900 Yan, Kedah"
//         }
//     },
//     {
//         "order_id": 2,
//         "order_desc": "",
//         "order_explain": null,
//         "order_date": "2024-05-17",
//         "dewan_order_date": "2024-05-30",
//         "order_status": "Disahkan",
//         "user": {
//         "user_id": 1,
//         "user_name": "Kamal Adli",
//         "user_email": "kamaladli@gmail.com",
//         "user_phone": "0135728839"
//         },
//         "dewan": {
//         "dewan_id": 3,
//         "dewan_name": "Dewan Lestari",
//         "dewan_desc": "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak dan juga sering dipanggil Dewan Serbaguna.",
//         "dewan_location": "Guar Chempedak, 08300 Guar Chempedak, Kedah"
//         }
//     }
// ]

const BookList = () => {
    // const { data, loading, error } = useFetchData('http://localhost:8080/orderdisplay');
    const {role} = useAuth();
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

    // fetch order data for user
    // const fetchOrderData = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/api/orderdisplay/${id}`);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

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
            {role != 1 && (
                <>
                <div className="badge badge-info gap-2 p-5 w-full rounded-none mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                    Sila ke Pejabat Majlis Daerah Yan untuk melakukan pembayaran
                </div>
                </>
            )}
            <div className="flex gap-2">
                <select className="select select-bordered w-full max-w-xs">
                    <option value="0">Pilih Dewan</option>
                    <option value="datomadi">Dewan Dato' Madi</option>
                    <option value="lestari">Dewan Lestari</option>
                </select>
                <DatePicker oneTap style={{ width: 200 }} placeholder="Select Date" size="lg" className="h-full"/>
            </div>
            <div className="overflow-x-auto mt-3">
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
                {role == 1 ? (
                    <>
                    {tempahDewan.map((tempah, index) => (
                        <tr key={tempah.id*index} className="hover">
                            <th>{index + 1}</th>
                            <td>{tempah.Nama}</td>
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
                                    Info Penuh
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
        <Paper titleDewan="" custom={["px-10 pt-10 pb-5 my-3 bg-slate-200 space-y-4"]} customTitle={["text-2xl"]} titleBool={false}>
            <div className="overflow-auto">
            <table className="table">
                <tbody>
                <tr>
                    <th className="border-4 border-slate-500">NAMA</th>
                    <td className="border-4 border-slate-500">{props.bookData.Nama}</td>
                </tr>
                <tr>
                    <th className="border-4 border-slate-500">E-MAIL</th>
                    <td className="border-4 border-slate-500">{props.bookData.Email}</td>
                </tr>
                <tr>
                    <th className="border-4 border-slate-500">NO.TELEFON</th>
                    <td className="border-4 border-slate-500">{props.bookData.Telefon}</td>
                </tr>
                <tr>
                    <th className="border-4 border-slate-500">DEWAN</th>
                    <td className="border-4 border-slate-500">{props.bookData.Dewan}</td>
                </tr>
                <tr>
                    <th className="border-4 border-slate-500">TARIKH</th>
                    <td className="border-4 border-slate-500">{props.bookData.Tarikh}</td>
                </tr>
                <tr>
                    <th className="border-4 border-slate-500">STATUS</th>
                    <td className="border-4 border-slate-500">
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
                {props.bookData.Status === "Ditempah" ? (
                <div className="join">
                    <button className="btn btn-error join-item" onClick={()=>document.getElementById('modal_reject_tempahan').showModal()}>Tolak</button>
                    <button className="btn btn-success join-item" onClick={()=>document.getElementById('modal_accept_tempahan').showModal()}>Sahkan</button>
                </div>
                ): props.bookData.Status === "Ditolak" && (
                    <button className="btn btn-accent" onClick={()=>document.getElementById('modal_revert_tempahan').showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
            <ModalAccept id={props.bookData.id}/>
            <ModalReject id={props.bookData.id}/>
            <ModalRevert id={props.bookData.id}/>
        </Paper>
        </>
    )
}

export default BookList;