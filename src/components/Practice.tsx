import { useState } from "react";
import practicePreview from "../assets/practice-preview.png";
import baselineSeriesCover from "../assets/baseline-series-cover.png";
import quickPracticesCover from "../assets/quick-practices-cover.png";
import deepReturnsCover from "../assets/deep-returns-cover.png";
import MenuDrawer from "./MenuDrawer";

type PracticeProps = {
  onBack: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onPractice: () => void;
  onBaselineSeries: () => void;
  onQuickReturns: () => void;
  onQuickResets: () => void;
  onDeepReturns: () => void;
};

function Practice({
  onBack,
  onBegin,
  onInvitation,
  onUnderstand,
  onPractice,
  onBaselineSeries,
  onQuickReturns,
  onDeepReturns,
}: PracticeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="practice-room">
      <button type="button" className="understand-return" onClick={onBack}>
        ← Back to Previous
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
          <p>Choose the return you need today.</p>
        </div>
      </section>

      <section className="practice-intro">
        <p>
          Understanding creates awareness.
          <br />
          Practice creates change.
        </p>

        <span />

        <p>
          Build a daily rhythm, return in everyday moments, or go deeper when
          you need more space to restore.
        </p>
      </section>

      <section className="practice-grid">
        <article
          className="practice-card practice-card-featured"
          onClick={onBaselineSeries}
        >
          <img
            src={baselineSeriesCover}
            alt="The Baseline Series"
            className="practice-card-image"
          />

          <div className="practice-card-content">
            <h2>The Baseline Series</h2>
            <p>
              Morning anchors and evening reflections to build regulation,
              awareness, and daily practice.
            </p>
            <span className="practice-card-meta">Twice daily • 2–4 min</span>
          </div>

          <span className="practice-card-arrow">→</span>
        </article>

        <article className="practice-card" onClick={onQuickReturns}>
          <img
            src={quickPracticesCover}
            alt="Quick Practices"
            className="practice-card-image"
          />

          <div className="practice-card-content">
            <h2>Quick Practices</h2>
            <p>
              Short guided practices to support you in everyday moments.
            </p>
            <span className="practice-card-meta">1–2 min</span>
          </div>

          <span className="practice-card-arrow">→</span>
        </article>

        <article className="practice-card" onClick={onDeepReturns}>
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
            <span className="practice-card-meta">10+ min</span>
          </div>

          <span className="practice-card-arrow">→</span>
        </article>
      </section>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onPractice={onPractice}
      />
    </section>
  );
}

export default Practice;