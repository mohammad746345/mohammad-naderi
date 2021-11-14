import React from 'react';
import "./Timer.css"
import { useTimer } from 'react-timer-hook';


function Timer({ expiryTimestamp, dataSize }) {
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}} dir={'ltr'} className="col-6">
      <div>
        <div className="col-6 d-flex flex-row justify-content-between">
          <div className="EnterTimerNumbers text-success">{minutes}</div>
          <div className="d-flex align-items-start" style={{color:"#707070"}}> : </div>
          <div className="EnterTimerNumbers text-success">{seconds}</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;