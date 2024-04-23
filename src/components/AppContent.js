// import logo from '../assets/logo.svg';
import '../assets/styles/App.css';
import Navbar from './Navbar';

const AppContent = () => {
    return (
    <div className="App">
        <Navbar />
    <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
    <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-warning">Close</button>
            </form>
            </div>
        </div>
    </dialog>
    </div>
    );
}

export default AppContent;