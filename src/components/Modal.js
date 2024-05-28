import { useNavigate } from "react-router-dom";
import useConsoleLog from "../hooks/useConsole";
import { useState } from "react";

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

export const ModalAccept = () => {
    const navigate = useNavigate();

    const handleAccept = () => {
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

export const ModalRevert = () => {
    const navigate = useNavigate();

    const handleRevert = () => {
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
    const [purpose, setPurpose] = useState("");
    const navigate = useNavigate();

    const handleTempahan = () => {
        navigate('/halaman/kalendartempahan')
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
                    <td className="border">{props.title}</td>
                </tr>
                <tr>
                    <th className="border">Tarikh</th>
                    <td className="border">{props.date}</td>
                </tr>
                <tr>
                    <th className="border">Tujuan</th>
                    <td className="border">
                        <input 
                            type="text" 
                            placeholder="Masukkan tujuan tempahan" 
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e)=> setPurpose(e.target.value)}
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
                    <button className="btn" onClick={handleTempahan} disabled={!purpose}>Ya</button>
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
    const navigate = useNavigate();

    const handleTempahan = () => {
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
                    <input type="text" placeholder="Masukkan nama dewan" className="input input-bordered w-full max-w-xs"/>
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        ALAMAT
                    </div>
                    <input type="text" placeholder="Masukkan alamat dewan" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="pb-1">
                    <label className="form-control">
                    <div className="label">
                        INFO DEWAN
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Masukkan maklumat dewan"></textarea>
                    </label>
                </div>
                <div className="pb-3">
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">GAMBAR DEWAN</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
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

