import './Items.css';

import utils from '../../utils/utils';

const noImages = 33;
const imagesPerRow = Math.floor(noImages/3);

const Items = () => {
    const images = [];
    for (let i = 1; i < noImages+1; i++) {
        images.push(utils.getImageFromPath(`gallery/${utils.pad(i, 3)}.jpg`));
    }

    const row1 = [];
    const row2 = [];
    const row3 = [];

    for (let i = 0; i < noImages; i += 3) {
        row1.push(
            <img key={i} src={images[i]} alt=""></img>
        );
        row2.push(
            <img key={i+1} src={images[i+1]} alt=""></img>
        );
        row3.push(
            <img key={i+2} src={images[i+2]} alt=""></img>
        );
    }

    return (
        <div id="items">
            <div id="row">
                {row1}
            </div>
            <div id="row">
                {row2}
            </div>
            <div id="row">
                {row3}
            </div>
        </div>
    );
}

export default Items;