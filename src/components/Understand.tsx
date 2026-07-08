import bookImage from "../assets/regulate-first-book.png";
import quoteBackground from "../assets/understand-quote-background.png";
import {
  EnergyIcon,
  AwarenessIcon,
  RegulationIcon,
  ConnectionIcon,
  ReadIcon,
  ListenIcon,
} from "./RFIcons";
import MenuDrawer from "./MenuDrawer";
import rfSymbol from "../assets/rf-symbol.png";
import { useState } from "react";

type UnderstandProps = {
  onBack: () => void;
  onBegin: () => void;
  onUnderstand: () => void;
  onVision: () => void;
  onPractice: () => void;
};

function Understand({
  onBack,
  onBegin,
  onUnderstand,
  onVision,
  onPractice,
}: UnderstandProps) {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="understand-room">
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

      <section className="understand-hero">
        <div className="understand-hero-copy">
          <h1>
            Understand what changes <em>everything.</em>
          </h1>

          <div className="understand-rule" />

          <p className="understand-subtitle">
            A different starting point for awareness, regulation, and daily life.
          </p>
        </div>

        <div className="understand-book-wrap">
          <img src={bookImage} alt="Regulate First book" />
        </div>

        <div className="understand-hero-bottom">
          <div className="understand-question">
            <span className="question-mark">❝</span>

            <p>
              What if the place to begin isn't your thoughts, your habits, or
              your discipline—
              <strong> but the state you're living from?</strong>
            </p>
          </div>

          <a
            className="understand-amazon-link"
            href="https://a.co/d/0dKNlzTx"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Amazon →
          </a>
        </div>
      </section>

      <section className="understand-quote">
        <img
          src={quoteBackground}
          alt=""
          className="understand-quote-bg"
          aria-hidden="true"
        />

        <div className="understand-quote-overlay">
          <div className="understand-quote-content">
            <h2>
              This isn't a book about becoming someone new.
              <br />
              It's about returning to who you are beneath the noise.
            </h2>

            <div className="understand-quote-line" />

            <p>
              A practical path toward greater awareness, steadiness, and
              alignment—one return at a time.
            </p>

            <em>Inward first. Then forward.</em>
          </div>
        </div>
      </section>

      <section className="understand-core">
        <div className="understand-section-heading">
          <h2>The Foundation</h2>
          <span />
        </div>

        <div className="understand-core-list">
          <article className="understand-core-item">
            <div className="understand-core-icon">
              <EnergyIcon />
            </div>

            <div>
              <h3>Energy</h3>
              <p>Your internal state shapes everything that follows.</p>
            </div>
          </article>

          <article className="understand-core-item">
            <div className="understand-core-icon">
              <AwarenessIcon />
            </div>

            <div>
              <h3>Awareness</h3>
              <p>You can't change what you haven't noticed.</p>
            </div>
          </article>

          <article className="understand-core-item">
            <div className="understand-core-icon">
              <RegulationIcon />
            </div>

            <div>
              <h3>Regulation</h3>
              <p>A steady system changes how you think, feel, and respond.</p>
            </div>
          </article>

          <article className="understand-core-item">
            <div className="understand-core-icon">
              <ConnectionIcon />
            </div>

            <div>
              <h3>Connection</h3>
              <p>
                When you're more present with yourself, you're more present with
                others.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="understand-learn">
        <div className="understand-section-heading">
          <h2>What You'll Learn</h2>
          <span />
        </div>

        <div className="understand-learn-list">
          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Why lasting change begins with your internal state</h3>
              <p>Not just your thoughts—but the state they're arising from.</p>
            </div>
          </article>

          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Recognize the patterns that pull you away from yourself</h3>
              <p>
                Stress, pressure, exhaustion, distraction, and automatic habits.
              </p>
            </div>
          </article>

          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Return to steadiness when life becomes overwhelming</h3>
              <p>
                Practical tools you can use in real moments—not just ideal ones.
              </p>
            </div>
          </article>

          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Restore energy before you're completely depleted</h3>
              <p>Build the capacity to show up for what matters most.</p>
            </div>
          </article>

          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Work with your mind and body as one system</h3>
              <p>
                Explore the five interconnected dimensions shaping your
                experience.
              </p>
            </div>
          </article>

          <article className="understand-learn-item">
            <div className="understand-learn-icon">✓</div>

            <div>
              <h3>Build a practice you can actually live</h3>
              <p>Seven phases designed to be returned to again and again.</p>
            </div>
          </article>
        </div>
      </section>

        <section className="understand-format">
            <div className="understand-section-heading">
            <h2>Choose Your Format</h2>
            <span />
            <p className="understand-format-subtitle">
                A quiet invitation to begin in the way that fits you best.
            </p>
            </div>

            <div className="understand-format-grid">

            <article className="understand-format-card">
                <div className="understand-format-icon">
                    <ReadIcon />
                </div>

                <div>
                <h3>Read</h3>

                <p>
                    Explore the complete framework through the paperback,
                    hardcover, or Kindle edition.
                </p>

                <div className="understand-format-options">
                    <span>Paperback</span>
                    <span>Hardcover</span>
                    <span>Kindle</span>
                </div>
                </div>
            </article>

            <article className="understand-format-card">
                <div className="understand-format-icon">
                    <ListenIcon />
                </div>

                <div>
                <h3>Listen</h3>

                <p>
                    Experience the audiobook at your own pace wherever you listen.
                </p>

                <div className="understand-format-options">
                    <span>Audible</span>
                </div>
                </div>
            </article>

            </div>

            <div className="understand-format-cta">
                <a
                    className="understand-amazon-link"
                    href="https://a.co/d/0dKNlzTx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Begin with the Book →
                </a>
            </div>

     </section>
        <MenuDrawer
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onBegin={onBegin}
            onInvitation={onBack}
            onUnderstand={onUnderstand}
            onVision={onVision}
            onPractice={onPractice}
            />

     <section className="understand-vision">
        <p className="understand-vision-kicker">The Bigger Picture</p>

        <h2>Regulation is the foundation, not the destination.</h2>

        <p>
            Regulate First begins with returning to steadiness. But the larger path
            opens into strength, connection, and a more awakened way of living.
        </p>

        <button
            type="button"
            className="understand-vision-button"
            onClick={onVision}
        >
            Explore the Vision →
        </button>
        </section>
   
     <section className="understand-next">

        <div className="understand-next-heading">
            <h2>Continue the Journey</h2>
            <span />
        </div>

        <p className="understand-next-lead">
            Understanding is where the journey begins.
            <br />
            Practice is where it becomes your life.
        </p>

        <p className="understand-next-copy">
            Explore practical tools to help you return
            to yourself—through the Baseline Series,
            guided returns, and everyday practice.
        </p> 

        <button
            className="understand-next-button"
            onClick={onPractice}
        >
            Explore Practice →
        </button>

        </section>
    </section>
  );
}

export default Understand;