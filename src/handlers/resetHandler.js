import data from "../data.js";
import dom from "../dom.js";
import updateTimeDom from "../components/updateTimeDom.js";
import formatMilliseconds from "../utils/formatMilliseconds.js";
import formatTimeUnit from "../utils/formatTimeUnit.js";

const resetHandler = () => {
    if(data.intervalId){
        clearInterval(data.intervalId);
        data.intervalId = null;
    };
    // reset data
    data.milliseconds = 0;
    data.seconds = 0;
    data.minutes = 0;
    
    // updateTimeDom(dom.time , data); 
    dom.time.querySelector('.milliseconds').innerText = formatMilliseconds(0) ;
    dom.time.querySelector('.seconds').innerText = formatTimeUnit(0);
    dom.time.querySelector('.minutes').innerText = formatTimeUnit(0) ;
};

export default resetHandler;