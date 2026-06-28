import { useEffect } from "react";
import Threshold from "./components/Threshold";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Threshold />
      <Welcome />
    </>
  );
}

export default App;