import { useEffect, useState } from "react";
import "./StopWatchSplitTimer.css";

function StopWatchSplitTimer(props) {
  const [timerStartedOnce, setTimerStartedOnce] = useState(false);
  const { time, timerStarted } = props;
  const { splith } = time;
  const { splitm } = time;
  const { splits } = time;
  const { splitms } = time;

  useEffect(() => {
    if (!timerStartedOnce && timerStarted) {
      setTimerStartedOnce(true);
    }
    // console.log(timerStartedOnce, timerStarted);
  }, [timerStartedOnce, timerStarted]);
  return (
    <>
      {!timerStartedOnce ? (
        <h3 className="splitTextHeading">Split Time</h3>
      ) : (
        <div className={"StopWatchSplitTimer "}>
          <span className="Hours fixwidth">
            {splith < 10 ? "0" + splith : splith}
          </span>
          :
          <span className="Minutes fixwidth">
            {splitm < 10 ? "0" + splitm : splitm}
          </span>
          :
          <span className="Seconds fixwidth">
            {splits < 10 ? "0" + splits : splits}
          </span>
          :
          <span className="MilleSeconds fixwidth">
            {splitms < 10 ? "0" + splitms : splitms}
          </span>
        </div>
      )}
    </>
  );
}
export default StopWatchSplitTimer;
