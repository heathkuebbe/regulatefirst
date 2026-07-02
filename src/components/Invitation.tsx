import InvitationCard from "./InvitationCard";
import understandPreview from "../assets/invitation/understand-preview.png";
import practicePreview from "../assets/invitation/practice-preview.png";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";

type InvitationProps = {
  onReturn: () => void;
  onUnderstand: () => void;
  onPractice: () => void;
};

function Invitation({ onReturn, onUnderstand, onPractice }: InvitationProps) {

const [menuOpen, setMenuOpen] = useState(false);

    return (
    <section className="invitation-room">
      <button
        type="button"
        className="invitation-return"
        onClick={onReturn}
      >
        ← Return
      </button>

      <button
        type="button"
        className="invitation-menu"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"  
      >
        <span />
        <span />
        <span />
      </button>

      <div className="invitation-room-content">
        <header className="invitation-header">
          
          <h1 className="invitation-title">
            Where would you like to begin?
          </h1>
          <div className="invitation-rule" />

          <p className="invitation-subtitle">
            Both paths begin from the same place.
            <br />
            Explore either—or both— and return whenever you're ready.
          </p>
        </header>

        <div className="invitation-cards">
          <InvitationCard
            title="Understand It"
            badge="Recommended"
            description="Explore the book that explains the why behind what you’ve discovered."
            imageSrc={understandPreview}
            imageAlt="Regulate First book in a warm study"
            points={["Read the book", "See the bigger picture"]}
            onClick={onUnderstand}
          />

          <InvitationCard
            title="Practice It"
            imageSrc={practicePreview}
            description="Step into a guided practice. Come back to what matters most—right now."
            imageAlt="Guided practice room"
            points={[
              "Practice guided Returns",
              "Regulate in real time",
              "Build your daily practice",
              "Feel the shift",
            ]}
            onClick={onPractice}
          />
        </div>

        <footer className="invitation-footer">
          <div className="invitation-footer-mark">☰</div>
          <p>You can return anytime</p>
        </footer>

        <MenuDrawer
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            />
      </div>
    </section>
  );
}

export default Invitation;