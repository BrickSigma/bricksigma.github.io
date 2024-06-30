class utils {
    static pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    static getImageFromPath(image) {
        return new URL(`../assets/${image}`, import.meta.url).href;
    }
}


export default utils;