// import logo from '../assets/logo.svg';
import Footer from './Footer';
import MainSec from './MainSec';
import Navbar from './Navbar';
import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import BookSec from './BookSec';
import BookList from './BookList';
import DashboardMain from './DashboardMain';
import Profile from './Profile';
import DewanDash from './DewanDash';

const AppContent = () => {
    const route = useLocation();

    let mainContent;
    switch(route.pathname){
        case '/logmasuk':
            mainContent = <SignIn/>;
            break;
        case '/halaman':
            mainContent = <Dashboard content={<DashboardMain/>} titleDashboard="Halaman"/>;
            break;
        case '/halaman/profil':
            mainContent = <Dashboard content={<Profile/>} titleDashboard="Profil"/>;
            break;
        case '/halaman/kalendartempahan':
            mainContent = <Dashboard content={<BookSec/> } titleDashboard="Kalendar Tempahan"/>;
            break;
        case '/halaman/senaraitempahan':
            mainContent = <Dashboard content={<BookList/> } titleDashboard="Senarai Tempahan"/>;
            break;
        case '/halaman/dewan':
            mainContent = <Dashboard content={<DewanDash/> } titleDashboard="Dewan"/>;
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
          <Route path="/halaman/*" element={mainContent}/>
        </Routes>
    );
}

export default AppContent;