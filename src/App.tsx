import React, { useEffect, useState } from "react";

import "./App.scss";
import Grid from "./Grid";
import { useInterval } from "./useInterval";
import { createInitialBoard } from "./utils/createInitialBoard";

const DEFAULT_TIMEOUT_INTERVAL = 200;
const DEFAULT_ITERATION = 0;

const App = () => {
  const [boardHeight, setBoardHeight] = useState(100);
  const [boardWidth, setBoardWidth] = useState(100);
  const [board, setBoard] = useState(
    createInitialBoard(boardHeight, boardWidth)
  );
  const [isRunning, setIsRunning] = useState(false);
  const [iteration, setIteration] = useState(DEFAULT_ITERATION);
  const [timeoutInterval, setTimeoutInterval] = useState<number>(
    DEFAULT_TIMEOUT_INTERVAL
  );

  useInterval(
    () => {
      setBoard(board.newEpoch());
      setIteration(iteration + 1);
    },
    isRunning ? timeoutInterval : null
  );

  useEffect(() => {
    createInitialBoard(boardHeight, boardWidth);
  }, [boardHeight, boardWidth]);

  return (
    <div className="container">
      <div className="buttons">
        <div className="container">
          <div className="form">
            <div className="title">Game of Life</div>
            <div className="input-container ic1">
              <input
                id="width"
                className="input"
                type="number"
                placeholder=" "
                onChange={(e) => setBoardWidth(+e.target.value)}
              />
              <div className="cut"></div>
              <label htmlFor="width" className="placeholder">
                Board Width
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="height"
                className="input"
                type="number"
                placeholder=" "
                onChange={(e) => setBoardHeight(+e.target.value)}
              />
              <div className="cut"></div>
              <label htmlFor="height" className="placeholder">
                Board Height
              </label>
            </div>
            <div className="input-container ic3">
              <div className="subtitle">Board update period</div>
              <input
                id="timeoutInterval"
                aria-label="timeout-interval"
                type="range"
                value={timeoutInterval}
                min={0}
                max={2000}
                step={20}
                onChange={(event) => {
                  setTimeoutInterval(
                    parseInt(event.currentTarget.value, 10) || 0
                  );
                }}
              />
              <label>{`${timeoutInterval} ms`}</label>
            </div>
            <div>
              <button
                onClick={() => {
                  setBoard(createInitialBoard(boardHeight, boardWidth));
                  setIsRunning(!isRunning);
                }}
                className="button"
              >
                {isRunning ? "Pause" : "Start"}
              </button>
              <button
                className="button"
                onClick={() => {
                  setIsRunning(false);
                  setTimeoutInterval(DEFAULT_TIMEOUT_INTERVAL);
                  setBoard(createInitialBoard(boardHeight, boardWidth));
                  setIteration(DEFAULT_ITERATION);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="interval"></div>
        <div className="iteration">
          <div>{`Iteration ${iteration}`}</div>
        </div>
      </div>
      <div className="grid">
        <Grid board={board} updateBoard={setBoard} />
      </div>
    </div>
  );
};

export default App;
