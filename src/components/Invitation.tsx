import InvitationCard from "./InvitationCard";
import understandPreview from "../assets/understand-preview.png";
import practicePreview from "../assets/practice-preview.png";
import { useState } from "react";
import rfSymbol from "../assets/rf-symbol.png";
import MenuDrawer from "./MenuDrawer";

type InvitationProps = {
  onReturn: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onBehind: () => void;
  onVision: () => void;
  onPractice: () => void;
};

function Invitation({
  onBegin,
  onInvitation,
  onUnderstand,
  onBehind,
  onVision,
  onPractice,
}: InvitationProps) {

const [menuOpen, setMenuOpen] = useState(false);

    return (
    <section className="invitation-room">
      <div className="rf-room-brand">
        <img src={rfSymbol} alt="" className="rf-room-symbol" />

        <div className="rf-room-brand-copy">
            <strong>Regulate First</strong>
            <span>Inward first, then forward.</span>
        </div>
        </div>

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
            description="Explore the ideas, the story behind them, and the larger vision."
            imageSrc={understandPreview}
            imageAlt="Regulate First book in a warm study"
            points={[
              "Discover the core ideas",
              "Step behind Regulate First",
              "Explore the Bigger Picture",
            ]}
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
      </div>

        <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onBehind={onBehind}
        onVision={onVision}
        onPractice={onPractice}
        
        />

    </section>
  );
}

export default Invitation;