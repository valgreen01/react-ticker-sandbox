import React from "react";
import "./styles.css";

/**
 * Implement a "Ticker" functionality with Hooks.
 *
 * 1. Ticker should start after component mount and tick
 *    each second.
 * 2. Click on "Puase" button should pause ticker.
 * 3. Click on "Continue" button should continue ticker.
 * 4. User should be unable to click "Pause" button when
 *    ticker is already paused.
 * 5. User should be unable to click "Continue" button when
 *    ticker is already counting.
 * 6. After counting up to "7" value, should be set to "0"
 *    and ticker should continue counting.
 */

export default function App() {
  const [tick, setTick] = React.useState(0);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      if (isActive) {
        if (tick !== 7) {
          setTick(tick + 1);
        } else {
          setTick(0);
        }
      }
    }, 1000);
  }, [tick, isActive]);

  return (
    <div className="App">
      <h1>React Exercise</h1>
      <h2>Ticker</h2>
      <p>{tick}</p>
      <div>
        <button onClick={() => setIsActive(false)} disabled={!isActive}>
          Pause
        </button>
        &nbsp;
        <button onClick={() => setIsActive(true)} disabled={isActive}>
          Continue
        </button>
      </div>
    </div>
  );
}
