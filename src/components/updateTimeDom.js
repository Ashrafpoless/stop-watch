import formatMilliseconds from "../utils/formatMilliseconds.js";
import formatTimeUnit from "../utils/formatTimeUnit.js";

const updateTimeDom = (timeDom , time) => {
    timeDom.querySelector('.milliseconds').innerText = formatMilliseconds(time.milliseconds);
    
    if (time.seconds !== time.oldSeconds){
        timeDom.querySelector('.seconds').innerText = formatTimeUnit(time.seconds);
    }
    
    if (time.minutes !== time.oldminutes){
    timeDom.querySelector('.minutes').innerText = formatTimeUnit(time.minutes);
    }

    timeDom.oldSeconds = timeDom.seconds;
    timeDom.oldminutes = timeDom.minutes;
};

export default updateTimeDom;