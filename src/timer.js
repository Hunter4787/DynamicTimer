import React from 'react';

const Timer = (props) => {
    let t = props.time
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

   if(t){ return (<div className="timer-style">
        <div className="cpnt-style">
            <span id="hours">{hours}:</span>
            <p>Hour</p>
        </div>


        <div className="cpnt-style">
            <span id="miutes">{minutes}:</span>
            <p>Minute</p>
        </div>


        <div className="cpnt-style">
            <span id="seconds">{seconds}</span>
            <p>Second</p>
        </div>



    </div>
    )}
    else { return (<div className="timer-style">
    <div className="cpnt-style">
        <span id="hours">00:</span>
        <p>Hour</p>
    </div>


    <div className="cpnt-style">
        <span id="miutes">00:</span>
        <p>Minute</p>
    </div>


    <div className="cpnt-style">
        <span id="seconds">00</span>
        <p>Second</p>
    </div>



</div>
)

    }
}
export default Timer