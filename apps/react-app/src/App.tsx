import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@repo/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello this is integrated react app</h1>
      <Button appName="react app">click me</Button>
    </>
  );
}

export default App;
