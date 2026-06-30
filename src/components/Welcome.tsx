type WelcomeProps = {
  onContinue: () => void;
};

function Welcome({ onContinue }: WelcomeProps) {
  return (
    <section className="welcome-room">
      <div className="welcome-room-content">
        <h1 className="welcome-title">
          <span className="welcome-line welcome-line-one">
            Arrive here...
          </span>

          <span className="welcome-line welcome-line-two">
            and begin to notice.
          </span>
        </h1>

        <button
          type="button"
          className="welcome-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default Welcome;