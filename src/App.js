import "./App.css";
import StopWatchMainTimer from "./StopWatchMainTimer";
import StopWatchSplitTimer from "./StopWatchSplitTimer";
import StopWatchButton from "./StopWatchButton";
import { useState } from "react";

function Stopwatch(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  const [splittime, setSplitTime] = useState({
    splitms: 0,
    splits: 0,
    splitm: 0,
    splith: 0,
  });
  const [splitRecord, setSplitRecord] = useState([]);
  // const [timerSplit, setTimerSplit] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [interve, setInterve] = useState();
  const [splitInterve, setSplitInterve] = useState();

  const start = () => {
    setTimerStarted(true);
    // setTimerSplit(true);
    starttimer();
    splittimershow();
  };
  const starttimer = () => {
    const run = () => {
      setTime((st) => {
        let tempms = st.ms,
          temps = st.s,
          tempm = st.m,
          temph = st.h;

        if (st.ms >= 99) {
          tempms = 0;
          temps = st.s + 1;
        }
        if (st.s > 59) {
          temps = 0;
          tempm = st.m + 1;
        }
        if (st.m > 59) {
          tempm = 0;
          temph = st.h + 1;
        }

        tempms = tempms + 1;

        return { ms: tempms, m: tempm, s: temps, h: temph };
      });
    };
    setInterve(setInterval(run, 10));
  };

  const splittimershow = () => {
    const run = () => {
      setSplitTime((st) => {
        let tempms = st.splitms,
          temps = st.splits,
          tempm = st.splitm,
          temph = st.splith;

        if (st.splitms >= 99) {
          tempms = 0;
          temps = st.splits + 1;
        }
        if (st.splits > 59) {
          temps = 0;
          tempm = st.splitm + 1;
        }
        if (st.splitm > 59) {
          tempm = 0;
          temph = st.splith + 1;
        }

        tempms = tempms + 1;

        return { splitms: tempms, splitm: tempm, splits: temps, splith: temph };
      });
    };

    setSplitInterve(setInterval(run, 10));
  };

  const pause = () => {
    setTimerStarted(false);
    clearInterval(interve);
    clearInterval(splitInterve);

    setSplitRecord((st) => [
      ...st,
      {
        srNo: st.length + 1,
        splitms: splittime.splitms,
        splits: splittime.splits,
        splitm: splittime.splitm,
        splith: splittime.splith,
        type: "pause",
      },
    ]);
  };
  const reset = () => {
    if (timerStarted === false) {
      setTime({ ms: 0, s: 0, m: 0, h: 0 });
      setSplitTime({ splitms: 0, splits: 0, splitm: 0, splith: 0 });
      setSplitRecord([]);
    }
  };
  const Split = () => {
    if (timerStarted === true) {
      setSplitRecord((st) => [
        ...st,
        {
          srNo: st.length + 1,
          splitms: splittime.splitms,
          splits: splittime.splits,
          splitm: splittime.splitm,
          splith: splittime.splith,
          type: "split",
        },
      ]);

      setSplitTime({ splitms: 0, splits: 0, splitm: 0, splith: 0 });
    }
  };

  return (
    <div className="StopWatch-Container">
      <StopWatchMainTimer time={time} />

      <StopWatchSplitTimer time={splittime} timerStarted={timerStarted} />
      <StopWatchButton
        timerStarted={timerStarted}
        // timerSplit={timerSplit}
        start={start}
        pause={pause}
        reset={reset}
        split={Split}
      />
      {/* <hr className="horizentalLine" /> */}

      <div className="splitTime">
        {splitRecord.map((record) => {
          const { srNo, splith, splitm, splitms, splits, type } = record;
          return (
            <div className="splittedTime">
              <span className="srNo">#{srNo}</span>
              <span className="splitTimeRecord">{`${splith}:${splitm}:${splits}:${splitms}`}</span>
              <span className="type">{type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Stopwatch;

// console.log(splitRecord);
// const { splitms, splits, splitm, splith } = splittime;
// const { splitms, splits, splitm, splith } = { ms, s, m, h };
// const [splittime,setSplitTime]=useState(splitms=ms,splits=s,splitm=m,splith=h)
// const [timer, setTimer] = useState({
// splitms: 0,
// splits: 0,
// splitm: 0,
// splith: 0,
// });
// const ref = useRef(null);
// console.log(splittime);
// const Time = [splitms, splits, splitm, splith];
// const arr = [{ id: count }];
// const splitTimeShow = [
//   {
//     srNo: counter,
//     splitms: splittime.splitms,
//     splits: splittime.splits,
//     splitm: splittime.splitm,
//     splith: splittime.splith,
//     type: "split",
//   },
//   {
//     srNo: counter++,
//     splitms: splittime.splitms,
//     splits: splittime.splits,
//     splitm: splittime.splitm,
//     splith: splittime.splith,
//     type: "split",
//   },
// ];
/* <ul>
        {splitTimeShow.map(() => {
          return <li>{}</li>;
        })}
      </ul> */
// const splitTimeShow = [
//   {
//     srNo: counter,
//     splitms: splittime.splitms,
//     splits: splittime.splits,
//     splitm: splittime.splitm,
//     splith: splittime.splith,
//     type: "split",
//   },
//   {
//     srNo: counter++,
//     splitms: splittime.splitms,
//     splits: splittime.splits,
//     splitm: splittime.splitm,
//     splith: splittime.splith,
//     type: "split",
//   },
// ];
// const [splitTimerStarted, setSplitTimerStarted] = useState(false);
// let counter = 1;
// var updatesplitH = timer.splith,
// updatesplitM = timer.splitm,
// updatesplitS = timer.splits,
// updatesplitMS = timer.splitms;
