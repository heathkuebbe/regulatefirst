type DiscoveryProps = {
  onContinue: () => void;
};

function Discovery({ onContinue }: DiscoveryProps) {
  return (
    <section className="discovery-room">
      <div className="discovery-room-content">
        <p className="discovery-question">What changed?</p>

        <div className="discovery-not-list">
          <p>Not your thoughts.</p>
          <p>Not your emotions.</p>
          <p>Not your habits.</p>
          <p>Not your circumstances.</p>
        </div>

        <p className="discovery-state">Your state.</p>

        <button
          type="button"
          className="discovery-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default Discovery;