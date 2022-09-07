// import { useState } from 'react';
import "./StopWatchMainTimer.css";
function StopWatchMainTimer(props) {
  const {
    time: { h, m, s, ms },
  } = props;
  // const { h } = time;
  // const { m } = time;
  // const { s } = time;
  // const { ms } = time;

  return (
    <div className={"StopWatchMainTimer "}>
      <span className="Hours fixwidth">{h < 10 ? "0" + h : h}</span>:
      <span className="Minutes fixwidth">{m < 10 ? "0" + m : m}</span>:
      <span className="Seconds fixwidth">{s < 10 ? "0" + s : s}</span>:
      <span className="MilleSeconds fixwidth">{ms < 10 ? "0" + ms : ms}</span>
    </div>
  );
}
export default StopWatchMainTimer;
