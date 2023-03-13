import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/DrQCN4D/book-with-pencil-cup-with-stationery-desk.jpg')] bg-cover bg-no-repeat bg-center text-white">
            <NavBar/>
            <Banner/>
        </div>
    );
};

export default Header;