import { useState } from "react";
import practicePreview from "../assets/practice-preview.png";
import baselineSeriesCover from "../assets/baseline-series-cover.png";
import quickPracticesCover from "../assets/quick-practices-cover.png";
import deepReturnsCover from "../assets/deep-returns-cover.png";
import spotifyIcon from "../assets/icons/spotify.svg";
import applePodcastsIcon from "../assets/icons/apple-podcasts.svg";
import MenuDrawer from "./MenuDrawer";
import rfSymbol from "../assets/rf-symbol.png";
import { CalendarIcon, PlayIcon } from "./RFIcons";

type PracticeProps = {
  onBack: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onVision: () => void;
  onPractice: () => void;
  onBaselineSeries: () => void;
  onQuickReturns: () => void;
  onQuickResets: () => void;
  onDeepReturns: () => void;
};

const links = {
  baselineSpotify:
    "https://open.spotify.com/episode/3hYkr7yZGrsyTXGyY48Va0?si=v8mVhpHCSUGUMssmV7YZ4A",
  baselineApple:
    "https://podcasts.apple.com/us/podcast/welcome-to-the-baseline-series/id6784716145?i=1000774355065",
  quickSpotify:
    "https://open.spotify.com/show/033Fc82fobG1A8ZZS9gUgH?si=e97100758de446d4",
  quickApple:
    "https://podcasts.apple.com/us/podcast/regulate-first-quick-returns/id6784783566",
  amazon: "https://a.co/d/045rLr7p",
};

type PlatformButtonsProps = {
  spotifyHref?: string;
  appleHref?: string;
  disabled?: boolean;
};

function PlatformButtons({
  spotifyHref,
  appleHref,
  disabled = false,
}: PlatformButtonsProps) {
  if (disabled) {
    return (
      <div className="practice-platform-panel">
        <p>Coming soon</p>

        <div className="practice-platform practice-platform-disabled">
          <span>In Development</span>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-platform-panel">
      <p>Open in your favorite platform</p>

      <a
        href={spotifyHref}
        className="practice-platform spotify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={spotifyIcon} alt="" />
        <span>Listen on Spotify</span>
        <span>→</span>
      </a>

      <a
        href={appleHref}
        className="practice-platform apple"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={applePodcastsIcon} alt="" />
        <span>Listen on Apple Podcasts</span>
        <span>→</span>
      </a>
    </div>
  );
}

function Practice({
  onBack,
  onBegin,
  onInvitation,
  onUnderstand,
  onVision,
  onPractice,
}: PracticeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="practice-room">
      <button
        type="button"
        className="rf-room-brand rf-room-brand-link"
        onClick={onBack}
        >
        <img
            src={rfSymbol}
            alt=""
            className="rf-room-symbol"
        />

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

      <section className="practice-hero">
        <img src={practicePreview} alt="Practice" className="practice-hero-image" />

        <div className="practice-hero-overlay">
          <h1>Practice</h1>
          <div className="practice-rule" />
          </div>
      </section>

      <section className="practice-intro">
        <p>
          Understanding creates awareness.
          <br />
          Practice creates change.
        </p>

        <span />

        <p>Choose the practice that meets you where you are today.</p>
      </section>

      <section className="practice-grid">
        <article className="practice-card practice-card-featured">
          <img
            src={baselineSeriesCover}
            alt="The Baseline Series"
            className="practice-card-image"
          />

          <div className="practice-card-content">
            <span className="practice-card-badge">Featured</span>

            <h2>The Baseline Series</h2>

            <p>
              The complete 7-week guided journey. Start with a three-minute
              introduction, then build a steady daily rhythm one morning anchor
              and one evening reflection at a time.
            </p>

            <div className="practice-meta-row">
              <span className="practice-meta-item">
                <CalendarIcon className="practice-meta-icon" />
                Twice Daily
              </span>

              <span className="practice-meta-item">
                <PlayIcon className="practice-meta-icon" />
                2–4 min
              </span>
            </div>

            <div className="practice-start">
              <PlayIcon className="practice-start-icon" />

              <div className="practice-start-copy">
                <strong>Welcome to the Baseline</strong>
                <span>3-minute introduction</span>
              </div>

                <a
                    href={links.baselineSpotify}
                    className="practice-start-now"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Start here →
                </a>
            </div>
          </div>

          <PlatformButtons
            spotifyHref={links.baselineSpotify}
            appleHref={links.baselineApple}
          />
        </article>

        <article className="practice-card">
          <img
            src={quickPracticesCover}
            alt="Quick Practices"
            className="practice-card-image"
          />

          <div className="practice-card-content">
            <h2>Quick Practices</h2>

            <p>Short guided practices to support you in everyday moments.</p>

            <div className="practice-meta-row">
              <span className="practice-meta-item">
                <PlayIcon className="practice-meta-icon" />
                1–2 min
              </span>
            </div>
          </div>

          <PlatformButtons
            spotifyHref={links.quickSpotify}
            appleHref={links.quickApple}
          />
        </article>

        <article className="practice-card">
          <img
            src={deepReturnsCover}
            alt="Deep Returns"
            className="practice-card-image"
          />

          <div className="practice-card-content">
            <h2>Deep Returns</h2>

            <p>
              Longer guided practices to help you slow down, restore, and
              reconnect.
            </p>

            <div className="practice-meta-row">
              <span className="practice-meta-item">
                <PlayIcon className="practice-meta-icon" />
                10+ min
              </span>
            </div>
          </div>

          <PlatformButtons disabled />
        </article>
      </section>

      <section className="practice-book-cta">
        <div>
          <h2>Continue with the Book</h2>
          <p>Deepen your understanding and keep building your path.</p>
        </div>

        <a href={links.amazon} target="_blank" rel="noopener noreferrer">
          View on Amazon →
        </a>
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

export default Practice;