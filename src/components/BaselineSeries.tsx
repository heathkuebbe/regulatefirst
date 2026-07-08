import { useState } from "react";
import baselineHero from "../assets/Baseline-hero.png";
import welcomeCover from "../assets/welcome-to-the-baseline-cover.png";
import spotifyIcon from "../assets/icons/spotify.svg";
import applePodcastsIcon from "../assets/icons/apple-podcasts.svg";
import MenuDrawer from "./MenuDrawer";
import {
  CalendarIcon,
  HeadphonesIcon,
  PlayIcon,
  SunriseIcon,
  SunsetIcon,
  PhaseIcon,
} from "./RFIcons";

type BaselineSeriesProps = {
  onBack: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onPractice: () => void;
};

const phases = [
  ["Week One", "Regulate", "Stabilize your system."],
  ["Week Two", "Revive", "Restore your energy."],
  ["Week Three", "Embody", "Return to your body."],
  ["Week Four", "Reveal", "Understand your patterns."],
  ["Week Five", "Release", "Let go of what you are carrying."],
  ["Week Six", "Align", "Clarify what matters."],
  ["Week Seven", "Rise", "Live from a steadier place."],
];

export default function BaselineSeries({
  onBack,
  onBegin,
  onInvitation,
  onUnderstand,
  onPractice,
}: BaselineSeriesProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="baseline-room">
      <section
        className="baseline-hero"
        style={{ backgroundImage: `url(${baselineHero})` }}
      >
        <div className="baseline-hero-overlay" />

        <button className="baseline-back-button" onClick={onBack}>
          ← Back to Practice
        </button>

        <button
          className="baseline-menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="baseline-hero-content">
          <p className="baseline-eyebrow">The Baseline Series</p>
          <h1>Begin where you are.</h1>
          <p>
            A seven-phase guided practice to build regulation, awareness, and
            daily rhythm.
          </p>
        </div>
      </section>

      <section className="baseline-welcome">
        <div className="baseline-welcome-inner">
          <div className="baseline-welcome-card">
            <img
              className="baseline-welcome-image"
              src={welcomeCover}
              alt="Welcome to the Baseline"
            />

            <div className="baseline-welcome-content">
              <p className="baseline-section-label">Start here</p>
              <h2>Welcome to the Baseline</h2>
              <p>
                Before beginning Week One, take three minutes to understand how
                the Baseline Series works and how to move through the journey
                ahead.
              </p>

              <div className="baseline-audio-row">
                <HeadphonesIcon className="baseline-small-icon" />
                <span>3:27 introduction</span>
              </div>

              <div className="baseline-platforms">
                <a className="baseline-platform-button" href="#" target="_blank">
                  <img src={spotifyIcon} alt="" />
                  Listen on Spotify
                </a>

                <a className="baseline-platform-button" href="#" target="_blank">
                  <img src={applePodcastsIcon} alt="" />
                  Listen on Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="baseline-overview">
        <div className="baseline-overview-inner">
          <p className="baseline-section-label">Seven phases</p>
          <h2>A guided return, one week at a time.</h2>
          <p>
            The Baseline Series is designed to help you practice regulation in
            small, repeatable ways — not through pressure, but through rhythm.
          </p>

          <div className="baseline-phase-grid">
            {phases.map(([week, title, copy]) => (
              <article className="baseline-phase-card" key={title}>
                <PhaseIcon className="baseline-phase-icon" />
                <p className="baseline-phase-label">{week}</p>
                <h3 className="baseline-phase-title">{title}</h3>
                <p className="baseline-phase-copy">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="baseline-how">
        <div className="baseline-how-inner">
          <p className="baseline-section-label">Daily rhythm</p>
          <h2>Simple enough to return to.</h2>

          <div className="baseline-rhythm-grid">
            <div className="baseline-rhythm-card">
              <SunriseIcon className="baseline-small-icon" />
              <h3>Morning Anchor</h3>
              <p>Begin the day with one small point of regulation.</p>
            </div>

            <div className="baseline-rhythm-card">
              <CalendarIcon className="baseline-small-icon" />
              <h3>Daily Practice</h3>
              <p>Carry the focus into ordinary moments throughout the day.</p>
            </div>

            <div className="baseline-rhythm-card">
              <SunsetIcon className="baseline-small-icon" />
              <h3>Evening Reflection</h3>
              <p>Notice what shifted, what surfaced, and what helped.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="baseline-final">
        <div className="baseline-final-card">
          <PlayIcon className="baseline-small-icon" />
          <h2>Begin the Baseline Series.</h2>
          <p>
            Start with the welcome introduction, then move into Week One when
            you are ready.
          </p>
          <button className="baseline-primary-button" onClick={onBegin}>
            Begin the Series →
          </button>
        </div>
      </section>

      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onPractice={onPractice}
      />
    </main>
  );
}