import './Gallery.css';

import React from 'react';
import Header from '../Header';
import Title from './Title';
import Items from './Items';
import Footer from '../Footer';

const Gallery = () => {
    return (
        <div id='gallery'>
            <Header />
            <Title />
            <Items />
            <Footer />
        </div>
    );
};

export default Gallery