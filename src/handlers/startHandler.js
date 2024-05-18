import  data  from "../data.js";
import dom from "../dom.js";
import updateTime from "../utils/updateTime.js";
import updateTimeDom from "../components/updateTimeDom.js";



const startHandler = () => {
    if(data.intervalId){
        clearInterval(data.intervalId);
    }
    data.intervalId = setInterval(()=>{
        const newDate =  updateTime(data);
        updateTimeDom(dom.time, newDate)
        
    },10)
};

export default startHandler;
