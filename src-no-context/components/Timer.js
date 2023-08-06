import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // we start the timer here in this component becuases this timer component will mount as soon as the game starts
  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tik");
        dispatch({ type: "tick" });
      }, 1000);
      //cleanup function --> cancel the interval!
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
