import practicePreview from "../assets/practice-preview.png";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";

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
  onQuickResets,
  onDeepReturns,
}: PracticeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="practice-room">
      <button
        type="button"
        className="understand-return"
        onClick={onBack}
      >
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
        <img
          src={practicePreview}
          alt="Practice"
          className="practice-hero-image"
        />

        <div className="practice-hero-overlay">
          <h1>Practice</h1>

          <div className="practice-rule" />

          <p>
            Choose the return you need today.
          </p>
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
          Begin the Baseline Series, take a Quick Return,
          reset in the middle of your day,
          or spend more time with a Deep Return.
        </p>
      </section>

      <section className="practice-grid">

        <article
          className="practice-card"
          onClick={onQuickReturns}
        >
          <div>
            <h2>Quick Returns</h2>

            <p>
              Five-minute guided practices to help you return
              wherever you are.
            </p>
          </div>

          <span>→</span>
        </article>

        <article
          className="practice-card"
          onClick={onQuickResets}
        >
          <div>
            <h2>Quick Resets</h2>

            <p>
              Brief moments of regulation for when life feels
              overwhelming or off balance.
            </p>
          </div>

          <span>→</span>
        </article>

        <article
          className="practice-card"
          onClick={onDeepReturns}
        >
          <div>
            <h2>Deep Returns</h2>

            <p>
              Longer guided practices designed to help you slow
              down, restore, and reconnect.
            </p>
          </div>

          <span>→</span>
        </article>

        <article
          className="practice-card practice-card-featured"
          onClick={onBaselineSeries}
        >
          <div>
            <h2>The Baseline Series</h2>

            <p>
              A guided seven-phase journey to build awareness,
              regulation, and daily practice—one day at a time.
            </p>
          </div>

          <span>→</span>
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

      <section className="practice-next">

        <div className="understand-next-heading">
          <h2>Return to the Beginning</h2>
          <span />
        </div>

        <p className="understand-next-lead">
          Every practice begins with an invitation.
        </p>

        <p className="understand-next-copy">
          Revisit the beginning whenever you need a reminder
          of what this journey is really about.
        </p>

        <button
          className="understand-next-button"
          onClick={onInvitation}
        >
          Back to the Invitation →
        </button>

      </section>
    </section>
  );
}

export default Practice;