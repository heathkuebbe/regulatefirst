type StartingPointProps = {
  onContinue: () => void;
};

function StartingPoint({ onContinue }: StartingPointProps) {
  return (
    <section className="starting-point-room">
      <div className="starting-point-room-content">
        <p className="starting-point-line starting-point-line-one">
          Most of us begin with...
        </p>

        <p className="starting-point-line starting-point-line-two">
          our thoughts.
        </p>

        <p className="starting-point-line starting-point-line-three">
          our emotions.
        </p>

        <p className="starting-point-line starting-point-line-four">
          our habits.
        </p>

        <p className="starting-point-line starting-point-line-five">
          our circumstances.
        </p>

        <p className="starting-point-line starting-point-line-six">
          But what if there is...
        </p>

        <p className="starting-point-signature">
          A Different Starting Point
        </p>

        <button
          type="button"
          className="starting-point-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default StartingPoint;