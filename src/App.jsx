import { useState } from "react";
import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/box/Box";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="container">
        <div>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="mb-3"
          >
            count is {count}
          </button>
          <Box />
        </div>
      </div>
    </>
  );
}

export default App;
