import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (timer === 0) {
      if (count > score && timer < 1) {
        localStorage.setItem("score", Number(count));
        setScore(Number(localStorage.getItem("score")));
      }
      return;
    }
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="home-container">
      <div className="home-timer">timer:{timer}</div>
      {score && score > 0 ? (
        <div>
            <h3 style={{textAlign: 'right'}}>High score {score}</h3>
          {count === score  ? (
            <h2>New high score {score} </h2>
          ) : (
            <h2>Score {count}</h2>
          )}
        </div>
      ) : null }
      <div className="home-count">{count}</div>
      <div className="btn-container">
        <button
          className="home-btn-start btn"
          onClick={() => {
            setTimer(10);
            setCount(0);
          }}
          disabled={timer !== 0}
        >
          start
        </button>
        <button
          className="home-btn-click btn"
          onClick={() => setCount((prev) => prev + 1)}
          disabled={timer === 0}
        >
          click me
        </button>
        <button
          className="home-btn-reset btn"
          onClick={() => {
            setCount(0);
            setTimer(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default HomePage;
