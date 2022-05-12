import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import MainPage from '../MainPage';

function Home () {
    return (
        <>
            <MainPage/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;