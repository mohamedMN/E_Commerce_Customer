import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Wishlist from '../components/Wishlist';
import Footer from '../components/Footer';

const WishlistPage: React.FC = () => {
    return <div>
        <Header/>
        <Navbar/>
        <Wishlist/>
        <Footer/>
  </div>;
};

export default WishlistPage
