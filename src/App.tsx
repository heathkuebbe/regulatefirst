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
import BehindRegulateFirst from "./components/BehindRegulateFirst";
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
  | "behind-regulate-first"
  | "practice"
  | "bigger-picture";

const roomPaths: Partial<Record<Room, string>> = {
  threshold: "/",
  invitation: "/invitation",
  understand: "/understand",
  "behind-regulate-first": "/behind-regulate-first",
  practice: "/practice",
  "bigger-picture": "/bigger-picture",
};

const roomSeo: Partial<
  Record<
    Room,
    {
      title: string;
      description: string;
      path: string;
    }
  >
> = {
  threshold: {
    title:
      "Regulate First | Practical Nervous System Regulation for Everyday Life",
    description:
      "Regulate First offers practical tools and guided practices to help you pause, regulate, reconnect, and move forward.",
    path: "/",
  },

  invitation: {
    title: "Begin the Journey | Regulate First",
    description:
      "Explore the Regulate First book, guided practices, and the larger vision behind an inward-first approach to everyday life.",
    path: "/invitation",
  },

  understand: {
    title: "The Regulate First Book | Regulation, Awareness and Daily Life",
    description:
      "Discover Regulate First, a practical path for regulation, awareness, and daily life by Heath Kruebbe.",
    path: "/understand",
  },

  "behind-regulate-first": {
    title: "Behind Regulate First | The Story Behind the Work",
    description:
      "Explore the lifelong question, personal journey, and deeper longing that gave rise to Regulate First.",
    path: "/behind-regulate-first",
  },

  practice: {
    title: "Guided Regulation Practices | Regulate First",
    description:
      "Explore guided regulation practices, the Baseline Series, Quick Practices, and deeper tools for returning to yourself.",
    path: "/practice",
  },

  "bigger-picture": {
    title: "The Bigger Picture | Regulate First",
    description:
      "Explore the larger Regulate First journey through regulation, strengthening, connection, and awakening.",
    path: "/bigger-picture",
  },
};

function getInitialRoom(): Room {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  switch (path) {
    case "/invitation":
      return "invitation";

    case "/understand":
      return "understand";

    case "/behind-regulate-first":
      return "behind-regulate-first";

    case "/practice":
      return "practice";

    case "/bigger-picture":
      return "bigger-picture";

    default:
      return "threshold";
  }
}

const DEV_ROOM: Room = getInitialRoom();

function App() {
  const [room, setRoom] = useState<Room>(DEV_ROOM);

  const navigateToRoom = (nextRoom: Room) => {
    const path = roomPaths[nextRoom];

    if (path && window.location.pathname !== path) {
      window.history.pushState({ room: nextRoom }, "", path);
    }

    setRoom(nextRoom);
  };

  useEffect(() => {
    const seo = roomSeo[room] ?? roomSeo.threshold;

    if (!seo) return;

    const absoluteUrl = `https://regulatefirst.com${seo.path}`;

    document.title = seo.title;

    const setMeta = (selector: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);

      if (element) {
        element.setAttribute("content", value);
      }
    };

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.title);
    setMeta('meta[property="og:description"]', seo.description);
    setMeta('meta[property="og:url"]', absoluteUrl);
    setMeta('meta[name="twitter:title"]', seo.title);
    setMeta('meta[name="twitter:description"]', seo.description);

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = absoluteUrl;
  }, [room]);

  useEffect(() => {
    const handlePopState = () => {
      setRoom(getInitialRoom());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
          onReturning={() => navigateToRoom("invitation")}
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
        <Discovery onContinue={() => navigateToRoom("invitation")} />
      )}

      {room === "invitation" && (
        <Invitation
          onReturn={() => setRoom("discovery")}
          onBegin={() => navigateToRoom("threshold")}
          onInvitation={() => navigateToRoom("invitation")}
          onUnderstand={() => navigateToRoom("understand")}
          onBehind={() => navigateToRoom("behind-regulate-first")}
          onVision={() => navigateToRoom("bigger-picture")}
          onPractice={() => navigateToRoom("practice")}
        />
      )}

      {room === "understand" && (
        <Understand
          onBack={() => navigateToRoom("invitation")}
          onBegin={() => navigateToRoom("threshold")}
          onUnderstand={() => navigateToRoom("understand")}
          onBehind={() => navigateToRoom("behind-regulate-first")}
          onVision={() => navigateToRoom("bigger-picture")}
          onPractice={() => navigateToRoom("practice")}
        />
      )}

      {room === "behind-regulate-first" && (
        <BehindRegulateFirst
          onBegin={() => navigateToRoom("threshold")}
          onInvitation={() => navigateToRoom("invitation")}
          onUnderstand={() => navigateToRoom("understand")}
          onBehind={() => navigateToRoom("behind-regulate-first")}
          onVision={() => navigateToRoom("bigger-picture")}
          onPractice={() => navigateToRoom("practice")}
        />
      )}

      {room === "practice" && (
        <Practice
          onBack={() => navigateToRoom("invitation")}
          onBegin={() => navigateToRoom("threshold")}
          onInvitation={() => navigateToRoom("invitation")}
          onUnderstand={() => navigateToRoom("understand")}
          onBehind={() => navigateToRoom("behind-regulate-first")}
          onVision={() => navigateToRoom("bigger-picture")}
          onPractice={() => navigateToRoom("practice")}
          onBaselineSeries={() => navigateToRoom("practice")}
          onQuickReturns={() => navigateToRoom("practice")}
          onQuickResets={() => navigateToRoom("practice")}
          onDeepReturns={() => navigateToRoom("practice")}
        />
      )}

      {room === "bigger-picture" && (
        <BiggerPicture
          onBack={() => navigateToRoom("understand")}
          onBegin={() => navigateToRoom("threshold")}
          onInvitation={() => navigateToRoom("invitation")}
          onUnderstand={() => navigateToRoom("understand")}
          onBehind={() => navigateToRoom("behind-regulate-first")}
          onVision={() => navigateToRoom("bigger-picture")}
          onPractice={() => navigateToRoom("practice")}
        />
      )}
    </>
  );
}

export default App;