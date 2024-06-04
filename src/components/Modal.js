import { useNavigate } from "react-router-dom";
import useConsoleLog from "../hooks/useConsole";
import { useState } from "react";
import axios from 'axios';

export const ModalLogout = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }
    return (
        <>
        <dialog id="modal_logout" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">LOG KELUAR</h3>
            <p className="py-4">Adakah anda pasti untuk log keluar?</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleLogOut}>Ya</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalReject = () => {
    const navigate = useNavigate();

    const handleReject = () => {
        // try{
        //     const res = axios.put(`http://localhost:8080/api/tempahdewan/${props.id}`, {
        //         status: "Ditolak"
        //     })
        //     console.log(res);
        //     navigate('/halaman/senaraitempahan')
        // }catch(e){
        //     throw e;
        // }
        navigate('/halaman/senaraitempahan')
    }
    return (
        <>
        <dialog id="modal_reject_tempahan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-red-300">
            <h3 className="font-bold text-lg">TOLAK TEMPAHAN</h3>
            <p className="py-4">Adakah anda pasti untuk menolak tempahan ini?</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleReject}>Ya</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalAccept = (props) => {
    const navigate = useNavigate();

    const handleAccept = () => {
        // try{
        //     const res = axios.put(`http://localhost:8080/api/tempahdewan/${props.id}`, {
        //         status: "Disahkan"
        //     })
        //     console.log(res);
        //     navigate('/halaman/senaraitempahan')
        // }catch(e){
        //     throw e;
        // }
        navigate('/halaman/senaraitempahan')
    }

    return (
        <>
        <dialog id="modal_accept_tempahan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-green-300">
            <h3 className="font-bold text-lg">SAHKAN TEMPAHAN</h3>
            <p className="py-4">Adakah anda pasti untuk mengesahkan tempahan ini?</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleAccept}>Ya</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalRevert = (props) => {
    const navigate = useNavigate();

    const handleRevert = () => {
        // try{
        //     const res = axios.put(`http://localhost:8080/api/tempahdewan/${props.id}`, {
        //         status: "Ditempah"
        //     })
        //     console.log(res);
        //     navigate('/halaman/senaraitempahan')
        // }catch(e){
        //     throw e;
        // }

        navigate('/halaman/senaraitempahan')
    }

    return (
        <>
        <dialog id="modal_revert_tempahan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-slate-300">
            <h3 className="font-bold text-lg">KEMBALIKAN TEMPAHAN</h3>
            <p className="py-4">Adakah anda pasti untuk mengembalikan tempahan ini?</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleRevert}>Ya</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalTempahan = (props) => {
    const [purpose, setPurpose] = useState(0);
    const navigate = useNavigate();
    const [catatan, setCatatan] = useState("");

    const handleTempahan = () => {

        // try{
        //     const res = await axios.post(`http://localhost:8080/api/tempahdewan`,
        //         {
        //             userID: props.user_id,
        //             dewanID: props.dewan_id,
        //             tarikh: props.date,
        //             purpose: purpose,
        //             catatan: catatan
        //         }
        //     )
        //     console.log(res);
        //     navigate('/halaman/kalendartempahan')
        // }catch(e){
        //     throw e;
        // }
        setPurpose(0);
        setCatatan("");
        navigate('/halaman/kalendartempahan')
    }
    const handlePurposeState = (e) => {
        setPurpose(e.target.value);
    }

    return (
        <>
        <dialog id="modal_tempahan_dewan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-amber-300">
            <h3 className="font-bold text-lg">TEMPAHAN DEWAN</h3>
            <p className="py-4">Adakah anda pasti untuk menempah dewan ini?</p>
            <div className="overflow-auto">
            <table className="table border">
                <tbody>
                <tr>
                    <th className="border">Dewan</th>
                    <td className="border">{props.name}</td>
                </tr>
                <tr>
                    <th className="border">Tarikh</th>
                    <td className="border">{props.date}</td>
                </tr>
                <tr>
                    <th className="border">Tujuan</th>
                    <td className="border">
                    <select className="select select-bordered w-full max-w-xs" onChange={handlePurposeState}>
                        <option value="0">Kategori...</option>
                        {props.name === "Dewan Lestari" && <option value="1">Perkahwinan</option>}
                        <option value="2">Persendirian/Swasta</option>
                        <option value="3">Kerajaan</option>
                        <option value="4">Kakitangan MDY (masih berkhidmat)</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <th className="border">Catatan</th>
                    <td className="border">
                        <input 
                            type="text"
                            placeholder="Masukkan catatan tempahan" 
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e)=> setCatatan(e.target.value)}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleTempahan} disabled={!catatan || purpose === "0"}>Ya</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalLihatTempahan = (props) => {
    return (
        <>
        <dialog id="modal_lihat_tempahan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">MAKLUMAT TEMPAHAN</h3>
            <p className="py-4">{`Maklumat tempahan berdasarkan tarikh: ${props.date}`}</p>
            <div className="overflow-auto">
            <table className="table border">
                <tbody>
                <tr>
                    <th className="border">Nama</th>
                    <td className="border">{props.data.nama}</td>
                </tr>
                <tr>
                    <th className="border">E-mail</th>
                    <td className="border">{props.data.email}</td>
                </tr>
                <tr>
                    <th className="border">Telefon</th>
                    <td className="border">{props.data.telefon}</td>
                </tr>
                <tr>
                    <th className="border">Status</th>
                    <td className="border">
                    <div className={`badge ${
                        props.data.status === "ditempah" ? "badge-warning" :
                        props.data.status === "disahkan" ? "badge-success" :
                        "badge-error"
                    }`}>
                        {props.data.status}
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn">Tutup</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalTambahDewan = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [info, setInfo] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleTempahan = () => {
        // try{
        //     const res = axios.post(`http://localhost:8080/api/dewanadd`, {
        //         name: name,
        //         address: address,
        //         info: info,
        //         image: image
        //     })
        //     console.log(res);
        //     navigate('/halaman/dewan')
        // }catch(e){
        //     throw e;
        // }
        navigate('/halaman/dewan')
    }

    return (
        <>
        <dialog id="modal_tambahan_dewan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">TAMBAHAN DEWAN</h3>
            <p className="py-4">Sila isikan kesemua maklumat yang diperlukan.</p>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                    NAMA DEWAN
                    </div>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama dewan"
                        value={name}
                        className="input input-bordered w-full max-w-xs" 
                        onChange={(e)=> setName(e.target.value)}/>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        ALAMAT
                    </div>
                    <input 
                        type="text" 
                        placeholder="Masukkan alamat dewan" 
                        value={address}
                        className="input input-bordered w-full max-w-xs" 
                        onChange={(e)=> setAddress(e.target.value)}/>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        INFO DEWAN
                    </div>
                    <textarea 
                        className="textarea textarea-bordered h-24" 
                        value={info}
                        placeholder="Masukkan maklumat dewan" 
                        onChange={(e)=> setInfo(e.target.value)}>
                    </textarea>
                    </label>
                </div>
                <div className="pb-3">
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">GAMBAR DEWAN</span>
                    </div>
                    <input 
                        type="file"
                        value={image}
                        className="file-input file-input-bordered w-full max-w-xs" 
                        onChange={(e)=> setImage(e.target.value)}/>
                    </label>
                </div>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleTempahan}>Hantar</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

export const ModalEditDewan = (props) => {
    const [dewanData, setDewanData] = useState({
        name: props.data.title,
        address: props.data.location,
        info: props.data.desc,
        image: props.data.img,
        tempImg: ""
    });
    const navigate = useNavigate();
    console.log(dewanData)

    const handleTempahan = () => {
        // try{
        //     const res = axios.put(`http://localhost:8080/api/dewanupdate/${props.id}`, {
        //         name: data.name,
        //         address: data.address,
        //         info: data.info,
        //         image: data.tempImg
        //     })
        //     console.log(res);
        //     navigate('/halaman/dewan')
        // }catch(e){
        //     throw e;
        // }
        navigate('/halaman/dewan')
    }

    //handle input change
    const handleInputChange = (e) => { 
        setDewanData({
            ...dewanData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <dialog id="modal_edit_dewan" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">TAMBAHAN DEWAN</h3>
            <p className="py-4">Sila isikan kesemua maklumat yang diperlukan.</p>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                    NAMA DEWAN
                    </div>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama dewan"
                        name="name"
                        value={dewanData.name}
                        className="input input-bordered w-full max-w-xs" 
                        onChange={handleInputChange}/>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        ALAMAT
                    </div>
                    <input 
                        type="text" 
                        placeholder="Masukkan alamat dewan" 
                        name="address"
                        value={dewanData.address}
                        className="input input-bordered w-full max-w-xs" 
                        onChange={handleInputChange}/>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        INFO DEWAN
                    </div>
                    <textarea 
                        className="textarea textarea-bordered h-24"
                        name="info" 
                        value={dewanData.info}
                        placeholder="Masukkan maklumat dewan" 
                        onChange={handleInputChange}>
                    </textarea>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        GAMBAR DEWAN
                    </div>
                    <input 
                        type="text"
                        value={dewanData.image}
                        name="image"
                        className="input input-bordered w-full max-w-xs" 
                        disabled/>
                    </label>
                </div>
                <div className="pb-3">
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">TUKAR GAMBAR DEWAN</span>
                    </div>
                    <input 
                        type="file"
                        name="tempImg"
                        value={dewanData.tempImg}
                        className="file-input file-input-bordered w-full max-w-xs" 
                        onChange={handleInputChange}/>
                    </label>
                </div>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="space-x-2">
                    <button className="btn" onClick={handleTempahan}>Hantar</button>
                    <button className="btn">Batal</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
        </>
    )
}

