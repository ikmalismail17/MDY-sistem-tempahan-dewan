import { ModalTambahDewan } from "./Modal";
import Paper from "./Paper";

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

const handleAddHall = () => {
    const modal = document.getElementById('modal_tambahan_dewan');
    modal.showModal();

}

const DewanDash = () => {
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
                        <h2 className="card-title font-bold">{dewan.title.toUpperCase()}</h2>
                        <p>{dewan.desc}</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn glass" onClick={() => { handleHallBool(); handleHallDetailData(dewan.title, dewan.img); }}>
                                Lihat Kalendar
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div> */}
                        </div>
                    </div>
                ))}
            </Paper>
            <ModalTambahDewan />
        </div>
    );
}

export default DewanDash;