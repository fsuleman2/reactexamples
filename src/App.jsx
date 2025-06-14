import { useCallback, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import useGetDataHook from "./hooks/useGetDataHook";
import MyDebounce from "./components/MyDebounce";

function App() {
  const [count, setCount] = useState(0);
  const { fetchData } = useGetDataHook();

  useEffect(() => {
    let url = "https://fakestoreapi.com/products/";
    fetchData({ url: url });
  }, []);
  const updateCounter = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <ChildApp updateCounter={updateCounter} /> */}
      {/* <Table /> */}
      <MyDebounce/>
    </>
  );
}

export default App;
