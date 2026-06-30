import { useState } from "react";
import Threshold from "./components/Threshold";
import Welcome from "./components/Welcome";
import Realization from "./components/Realization";
import Notice from "./components/Notice";
import StartingPoint from "./components/StartingPoint";
import Recognition from "./components/Recognition";
import Discovery from "./components/Discovery";
import "./App.css";

type Room =
  | "threshold"
  | "welcome"
  | "realization"
  | "notice"
  | "starting-point"
  | "recognition"
  | "discovery";

function App() {
  const [room, setRoom] = useState<Room>("threshold");

  return (
    <>
      {room === "threshold" && (
        <Threshold onContinue={() => setRoom("welcome")} />
      )}

      {room === "welcome" && (
        <Welcome onContinue={() => setRoom("realization")} />
      )}

      {room === "realization" && (
        <Realization onContinue={() => setRoom("notice")} />
      )}

      {room === "notice" && (
        <Notice onContinue={() => setRoom("starting-point")} />
      )}

      {room === "starting-point" && (
        <StartingPoint onContinue={() => setRoom("recognition")} />
      )}

      {room === "recognition" && (
        <Recognition onContinue={() => setRoom("discovery")} />
      )}

      {room === "discovery" && (
        <Discovery onContinue={() => setRoom("threshold")} />
      )}
    </>
  );
}

export default App;