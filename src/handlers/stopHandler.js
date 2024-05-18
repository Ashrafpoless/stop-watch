import data from "../data.js";
import dom from "../dom.js";

const stopHandler = () => {
    if(data.intervalId){
        clearInterval(data.intervalId)
    }
};

export default stopHandler;