import { useState } from "react";
import biggerPictureHero from "../assets/bigger-picture-hero.png";
import biggerPictureComingSoon from "../assets/bigger-picture-coming-soon.png";
import rfSymbol from "../assets/rf-symbol.png";
import MenuDrawer from "./MenuDrawer";
import {
  RegulatePathIcon,
  StrengthenIcon,
  ConnectIcon,
  AwakenIcon,
} from "./RFIcons";

type BiggerPictureProps = {
  onBack: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onVision: () => void;
  onPractice: () => void;
};

const pathStages = [
  {
    number: "01",
    title: "Regulate",
    label: "Foundation",
    copy: "Return to steadiness. Build a baseline you can come back to.",
    Icon: RegulatePathIcon,
  },
  {
    number: "02",
    title: "Strengthen",
    label: "Capacity",
    copy: "Develop resilience, energy, and the ability to respond with more choice.",
    Icon: StrengthenIcon,
  },
  {
    number: "03",
    title: "Connect",
    label: "Relationship",
    copy: "Reconnect with your body, your values, other people, and what matters.",
    Icon: ConnectIcon,
  },
  {
    number: "04",
    title: "Awaken",
    label: "Presence",
    copy: "Live with greater awareness, clarity, contribution, and aliveness.",
    Icon: AwakenIcon,
  },
];

function BiggerPicture({
  onBegin,
  onInvitation,
  onUnderstand,
  onPractice,
  onVision,
}: BiggerPictureProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bigger-room">
      <button
        type="button"
        className="rf-room-brand rf-room-brand-link"
        onClick={onInvitation}
      >
        <img src={rfSymbol} alt="" className="rf-room-symbol" />

        <div className="rf-room-brand-copy">
          <strong>Regulate First</strong>
          <span>Inward first, then forward.</span>
        </div>
      </button>

      <button
        type="button"
        className="understand-menu"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <section className="bigger-hero">
        <img
          src={biggerPictureHero}
          alt="A quiet sunrise path through mountains"
          className="bigger-hero-image"
        />

        <div className="bigger-hero-overlay">
          <p className="bigger-kicker">The Vision</p>
          <h1>The Bigger Picture</h1>
          <div className="bigger-rule" />
          <p>
            Everything begins with regulation. From there, the path opens into
            strength, connection, and a more awakened way of living.
          </p>
        </div>
      </section>

      <section className="bigger-intro">
        <p>
          Regulation is not the destination.
          <br />
          It is the foundation.
        </p>

        <span />

        <p>
          Regulate First begins with the state you are living from. But the
          larger vision is about what becomes possible when that state becomes
          steadier.
        </p>
      </section>

      <section className="bigger-path">
        <div className="bigger-section-heading">
          <p>The full arc</p>
          <h2>Regulate. Strengthen. Connect. Awaken.</h2>
        </div>

        <div className="bigger-stage-list">
          {pathStages.map(({ number, title, label, copy, Icon }) => (
            <article className="bigger-stage-card" key={title}>
              <div className="bigger-stage-icon-wrap">
                <Icon className="bigger-stage-icon" />
              </div>

              <div className="bigger-stage-number">{number}</div>

              <div className="bigger-stage-copy">
                <p>{label}</p>
                <h3>{title}</h3>
                <span>{copy}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bigger-closing">
        <div className="bigger-closing-copy">
          <p className="bigger-kicker">The larger path</p>
          <h2>This is more than a practice.</h2>
          <p>
            The book and practices are the beginning. The larger path is a way
            of living with more steadiness, resilience, relationship, and
            presence.
          </p>
          <em>Inward first. Then forward.</em>
        </div>

        <div className="bigger-closing-card">
          <img
            src={biggerPictureComingSoon}
            alt="A quiet path through a golden landscape"
            className="bigger-closing-image"
          />

          <div className="bigger-closing-card-content">
            <p className="bigger-kicker">Continue</p>
            <h3>Return to the book.</h3>
            <p>
              If you want to understand the foundation more deeply, return to
              the Understand room.
            </p>

            <button
              type="button"
              className="bigger-return-button"
              onClick={onUnderstand}
            >
              Back to Understand →
            </button>
          </div>
        </div>
      </section>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onVision={onVision}
        onPractice={onPractice}
      />
    </section>
  );
}

export default BiggerPicture;