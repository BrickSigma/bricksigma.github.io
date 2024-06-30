import './Title.css';

import Background from '../../assets/gallery_background.jpg';

const Title = () => {
    return (
        <div id="title">
            <img src={Background} alt=''></img>
            <div className='darken'></div>
            <div className="name">Gallery</div>
        </div>
    );
};

export default Title;