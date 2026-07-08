import { useEffect, useState } from "react";
import Threshold from "./components/Threshold";
import Welcome from "./components/Welcome";
import Realization from "./components/Realization";
import Notice from "./components/Notice";
import StartingPoint from "./components/StartingPoint";
import Recognition from "./components/Recognition";
import Discovery from "./components/Discovery";
import Invitation from "./components/Invitation";
import Understand from "./components/Understand";
import Practice from "./components/Practice";
import BiggerPicture from "./components/BiggerPicture";
import "./App.css";

type Room =
  | "threshold"
  | "welcome"
  | "realization"
  | "notice"
  | "starting-point"
  | "recognition"
  | "discovery"
  | "invitation"
  | "understand"
  | "practice"
  | "bigger-picture";

/*
  DEVELOPMENT START ROOM

  Use "threshold" for the full experience.
  Use "invitation" to skip straight to the Invitation room.
  Use "understand" while building the Book Room.
*/

const DEV_ROOM: Room = "threshold";

function App() {
   const [room, setRoom] = useState<Room>(DEV_ROOM);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [room]);

  return (
    <>
      {room === "threshold" && (
        <Threshold
          onContinue={() => setRoom("welcome")}
          onReturning={() => setRoom("invitation")}
        />
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
        <Discovery onContinue={() => setRoom("invitation")} />
      )}

      {room === "invitation" && (
        <Invitation
          onReturn={() => setRoom("discovery")}
          onBegin={() => setRoom("threshold")}
          onInvitation={() => setRoom("invitation")}
          onUnderstand={() => setRoom("understand")}
          onVision={() => setRoom("bigger-picture")}
          onPractice={() => setRoom("practice")}
        />
      )}

      {room === "understand" && (
        <Understand
          onBack={() => setRoom("invitation")}
          onBegin={() => setRoom("threshold")}
          onUnderstand={() => setRoom("understand")}
          onVision={() => setRoom("bigger-picture")}
          onPractice={() => setRoom("practice")}
        />
      )}

      {room === "practice" && (
        <Practice
          onBack={() => setRoom("invitation")}
          onBegin={() => setRoom("threshold")}
          onInvitation={() => setRoom("invitation")}
          onUnderstand={() => setRoom("understand")}
          onVision={() => setRoom("bigger-picture")}
          onPractice={() => setRoom("practice")}
          onBaselineSeries={() => setRoom("practice")}
          onQuickReturns={() => setRoom("practice")}
          onQuickResets={() => setRoom("practice")}
          onDeepReturns={() => setRoom("practice")}
        />
      )}
      
      {room === "bigger-picture" && (
        <BiggerPicture
          onBack={() => setRoom("understand")}
          onBegin={() => setRoom("threshold")}
          onInvitation={() => setRoom("invitation")}
          onUnderstand={() => setRoom("understand")}
          onVision={() => setRoom("bigger-picture")}
          onPractice={() => setRoom("practice")}
        />
      )}

    </>
  );
}



export default App;