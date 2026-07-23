import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import rfSymbol from "../assets/rf-symbol.png";

import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import tiktokIcon from "../assets/icons/tiktok.png";
import threadsIcon from "../assets/icons/threads.svg";
import amazonIcon from "../assets/icons/amazon.svg";

type ContinueRoomProps = {
  onBack: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onBehind: () => void;
  onVision: () => void;
  onPractice: () => void;
  onCommunity: () => void;
};

type PlatformLinkProps = {
  href: string;
  icon: string;
  label: string;
  className?: string;
};

const links = {
  facebook: "https://www.facebook.com/profile.php?id=61573294949920",
  instagram: "https://www.instagram.com/regulatefirstco/",
  youtube: "https://www.youtube.com/@RegulateFirst",
  tiktok: "https://www.tiktok.com/@regulatefirst.com",
  threads: "https://www.threads.com/@regulatefirstco",
  amazonAuthor: "https://www.amazon.com/stores/author/B0H7FL8VCD?ccs_id=b2f1b538-a40a-4ef5-8b58-495cf22a744a",
};

function PlatformLink({
  href,
  icon,
  label,
  className = "",
}: PlatformLinkProps) {
  return (
    <a
      href={href}
      className={`continue-platform-link ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <img src={icon} alt="" aria-hidden="true" />
    </a>
  );
}

function ContinueRoom({
  onBack,
  onBegin,
  onInvitation,
  onUnderstand,
  onBehind,
  onVision,
  onPractice,
  onCommunity,

}: ContinueRoomProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="continue-room">
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

      <main className="continue-content">
        <header className="continue-header">
          <h1>
            The practice continues
            <br />
            beyond these pages.
          </h1>

          <div
            className="continue-header-rule"
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </div>
        </header>

        <section className="continue-sections">

          <article className="continue-section">
            
            <div className="continue-section-content">
              <h2>Connect &amp; Reflect</h2>

              <p>Join the conversation.</p>

              <div className="continue-platforms">
                <PlatformLink
                  href={links.facebook}
                  icon={facebookIcon}
                  label="Facebook"
                />

                <PlatformLink
                  href={links.instagram}
                  icon={instagramIcon}
                  label="Instagram"
                />
              </div>
            </div>
          </article>

          <div className="continue-divider">
            <span />
            <i />
            <span />
          </div>

          <article className="continue-section">
            
            <div className="continue-section-content">
              <h2>Watch &amp; Learn</h2>

              <p>
                Insights, practices, and deeper conversations.
              </p>

              <div className="continue-platforms continue-platforms-wide">
                <PlatformLink
                  href={links.youtube}
                  icon={youtubeIcon}
                  label="YouTube"
                />

                <PlatformLink
                  href={links.tiktok}
                  icon={tiktokIcon}
                  label="TikTok"
                />

                <PlatformLink
                  href={links.threads}
                  icon={threadsIcon}
                  label="Threads"
                />
              </div>
            </div>
          </article>

          <div className="continue-divider">
            <span />
            <i />
            <span />
          </div>

          <article className="continue-section">
            
            <div className="continue-section-content">
              <h2>Read</h2>

              <p>
                Follow Heath for future book releases.
              </p>

              <div className="continue-platforms">
                <PlatformLink
                  href={links.amazonAuthor}
                  icon={amazonIcon}
                  label="Amazon Author Page"
                />
              </div>
            </div>
          </article>

        </section>

        <footer className="continue-closing">
          <div className="continue-closing-rule">
            <span />
            <i />
            <span />
          </div>

          <p>Wherever we meet next, welcome.</p>
        </footer>
      </main>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onBehind={onBehind}
        onVision={onVision}
        onPractice={onPractice}
        onCommunity={onCommunity}
      />
    </section>
  );
}

export default ContinueRoom;