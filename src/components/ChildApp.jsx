import { useMemo, useState } from "react";
import { memo } from "react";

function ChildApp({ updateCounter }) {
  const [taskCount, setTaskCount] = useState(0);
  console.log("ChildApp component rendered");
  const computeHeavyTask = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 1000000; i++) {
      // Simulating a heavy computation
      output = Math.sqrt(i);
    }
    return output;
  }, []);
  // This component represents the child app
  return (
    <div>
      <h1>Child App</h1>
      <p>This is the child app content.</p>
      <button onClick={updateCounter}>Increment Counter</button>
      <h1>{computeHeavyTask} Run Heavy Task</h1>
    </div>
  );
}

export default memo(ChildApp);
