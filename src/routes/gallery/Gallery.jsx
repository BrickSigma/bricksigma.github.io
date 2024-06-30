import './Gallery.css';

import React from 'react';
import Header from '../Header';
import Title from './Title';
import Items from './Items';

const Gallery = () => {
    return (
        <div id='gallery'>
            <Header />
            <Title />
            <Items />
        </div>
    );
};

export default Gallery