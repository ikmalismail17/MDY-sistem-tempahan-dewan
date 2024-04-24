// import logo from '../assets/logo.svg';
import Footer from './Footer';
import MainSec from './MainSec';
import Navbar from './Navbar';

const AppContent = () => {
    return (
    <div className="container">
        <Navbar />
        <MainSec />
        <Footer />
    </div>
    );
}

export default AppContent;