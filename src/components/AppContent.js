// import logo from '../assets/logo.svg';
import Footer from './Footer';
import MainSec from './MainSec';
import Navbar from './Navbar';
import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

const AppContent = () => {
    const route = useLocation();

    let mainContent;
    switch(route.pathname){
        case '/signin':
            mainContent = <SignIn/>;
            break;
        case '/dashboard':
            mainContent = <Dashboard />;
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
          <Route path="/dashboard/*" element={mainContent}/>
        </Routes>
    );
}

export default AppContent;