type RealizationProps = {
  onContinue: () => void;
};

function Realization({ onContinue }: RealizationProps) {
  return (
    <section className="realization-room">
      <div className="realization-room-content">
        <p className="realization-line realization-line-one">
          The state you're living from...
        </p>

        <p className="realization-line realization-line-two">
          shapes everything.
        </p>

        <div className="realization-list">
          <p className="realization-item realization-item-one">Everything you notice.</p>
          <p className="realization-item realization-item-two">Everything you feel.</p>
          <p className="realization-item realization-item-three">Every decision.</p>
          <p className="realization-item realization-item-four">Every conversation.</p>
          <p className="realization-item realization-item-five">Every relationship.</p>
          <p className="realization-item realization-item-six">Every day.</p>
        </div>

        <button
          type="button"
          className="realization-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default Realization;