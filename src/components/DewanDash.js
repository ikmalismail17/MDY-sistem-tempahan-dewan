import { ModalEditDewan , ModalTambahDewan } from "./Modal";
import Paper from "./Paper";
import { useFetchData } from "../hooks/useFetchData";
import { useState } from "react";
import useConsole from "../hooks/useConsole";

const listDewan = [
    {
        title: "Dewan Dato' Madi",
        // img: "https://yan.pimaxis.my/images/Aktiviti/submenu/KEMUDAHAN%20AWAM/GAMBAR%2014-%20DEWAN%20DATO'%20MADI%20YAN.JPG",
        img: "https://fastly.4sqi.net/img/general/width960/LYBRK3IF2DLIAVDAUAI4FDVZOIOVVVEDDPFKIVKJDCVMZQGC.jpg",
        desc: "Dewan Dato' Madi merupakan dewan yang terletak di berdekatan dengan Majlis Daerah Yan.",
        location: " 7, Jalan Pantai Murni, Kampung Pantai Murni, 06900 Yan, Kedah",
    },
    {
        title: "Dewan Lestari",
        img: "https://lh3.googleusercontent.com/p/AF1QipOAVYw-MlVynOz-qb0gLoCTaOGbYf6AjnOUVmU3=s680-w680-h510",
        desc: "Dewan Lestari merupakan dewan yang terletak di kawasan Guar Chempedak.",
        location: "Guar Chempedak, 08300 Guar Chempedak, Kedah",
    },
];

const handleAddHall = () => {
    const modal = document.getElementById('modal_tambahan_dewan');
    modal.showModal();
}

const DewanDash = () => {
    // const { data, loading, error } = useFetchData('http://localhost:8080/api/dewanproperty');
    const [data, setData] = useState([]);
    console.log("In dewandash:",data)
    return (
        <div>
            <Paper titleDewan="Senarai Dewan" custom={["p-10 bg-slate-200"]} customTitle={["text-2xl"]} titleBool={true}>
            <div className="flex mb-3 gap-2 mt-2">
            <label className="input input-bordered flex items-center">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <button className="btn btn-ghost tooltip tooltip-top" data-tip="Tambah Dewan" onClick={handleAddHall}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>
            </button>
            </div>
            {listDewan.map((dewan,index) => (
                    <div 
                        className="h-64 card hover:bg-slate-200 mb-3 lg:card-side bg-base-100 shadow-xl shadow-gray-600 hover:shadow-emerald-600 hover:scale-90 transition-transform duration-300 ease-in-out"
                        key={dewan.title}
                    >
                        <figure className='w-80 overflow-hidden'><img src={dewan.img} alt={dewan.title} className='w-full h-full object-cover'/></figure>
                        <div className="card-body">
                        <h2 className="card-title font-bold mb-3">{dewan.title.toUpperCase()}</h2>
                        <p>{dewan.desc}</p>
                        <p className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-600">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            {dewan.location}
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral" 
                            onClick={
                                    ()=>{
                                        setData(dewan);
                                        document.getElementById('modal_edit_dewan').showModal();
                                        console.log("In function:",dewan)
                                    }
                                }>
                                Kemaskini
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </Paper>
            <ModalTambahDewan />
            <ModalEditDewan data={data}/>
        </div>
    );
}

export default DewanDash;