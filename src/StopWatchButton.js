// import { useState } from "react";
import "./StopWatchButton.css";
function StopWatchButton(props) {
  const { start, pause, split, timerStarted, reset } = props;

  return (
    <div className="StopWatchButton">
      {!timerStarted ? (
        <button className="start button-style" onClick={start}>
          Start
        </button>
      ) : (
        <button className="pause button-style" onClick={pause}>
          Pause
        </button>
      )}
      {timerStarted === true ? (
        <button className="split button-style splitColour" onClick={split}>
          Split
        </button>
      ) : (
        <button className="split button-style splitCursor" onClick={split}>
          Split
        </button>
      )}

      {timerStarted === false ? (
        // ((
        //   // <button
        //   //   className="split button-style splitCursor "
        //   //   onClick={split}
        //   //   // disabled="disabled"
        //   // >
        //   //   Split
        //   // </button>
        // ),
        <button className="Reset button-style resetColour " onClick={reset}>
          Reset
        </button>
      ) : (
        <button className="Reset button-style splitCursor" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
export default StopWatchButton;

{
  /* {timerSplit ? (
        <button className="split button-style splitColour" onClick={split}>
          Split
        </button>
      ) : (
        <button className="split button-style splitCursor" onClick={split}>
          Split
        </button>
      )} */
}
