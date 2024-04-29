// import logo from '../assets/logo.svg';
import Footer from './Footer';
import MainSec from './MainSec';
import Navbar from './Navbar';
import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import SignIn from './SignIn';
import AdminDashboard from './AdminDashboard';
import SignUp from './SignUp';

const AppContent = () => {
    const route = useLocation();

    let mainContent;
    switch(route.pathname){
        case '/signin':
            mainContent = <SignIn/>;
            break;
        case '/signup':
            mainContent = <SignUp/>;
            break;
        case '/admindashboard':
            mainContent = <AdminDashboard />;
            break;
        default:
            mainContent = (
                <>
                <Navbar />
                <MainSec />
                <Footer />
                </>
            );
            break;
    }

    return (
        <Routes>
          <Route path="/*" element={mainContent} />
          <Route path="/admindashboard/*" element={mainContent}/>
        </Routes>
    );
}

export default AppContent;