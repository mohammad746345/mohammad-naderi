import React from 'react';
import "./Timer.css"
import { useTimer } from 'react-timer-hook';


function Timer({ expiryTimestamp, dataSize }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <div className="col-12 d-flex flex-row justify-content-center">
          <div className="col-2 d-flex flex-column justify-content-between">
            <div className="timerNumbers">{days}</div>
            <div className="timerNames" style={{ fontSize:`${dataSize}px` }}>روز</div>
          </div>
          <div className="d-flex align-items-start" style={{color:"#707070"}}> | </div>
          <div className="col-2 d-flex flex-column justify-content-between">
            <div className="timerNumbers">{hours}</div>
            <div className="timerNames" style={{ fontSize:`${dataSize}px` }}>ساعت</div>
          </div>
          <div className="d-flex align-items-start" style={{color:"#707070"}}> | </div>
          <div className="col-2 d-flex flex-column justify-content-between">
            <div className="timerNumbers">{minutes}</div>
            <div className="timerNames" style={{ fontSize:`${dataSize}px` }}>دقیقه</div>
          </div>
          <div className="d-flex align-items-start" style={{color:"#707070"}}> | </div>
          <div className="col-2 d-flex flex-column justify-content-between">
            <div className="timerNumbers">{seconds}</div>
            <div className="timerNames" style={{ fontSize:`${dataSize}px` }}>ثانیه</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;