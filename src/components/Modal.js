import { useNavigate } from "react-router-dom";

export const ModalLogout = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }
    return (
        <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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

