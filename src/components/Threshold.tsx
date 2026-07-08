import symbol from "../assets/rf-symbol.png";

type ThresholdProps = {
  onContinue: () => void;
  onReturning: () => void;
};

function Threshold({ onContinue, onReturning }: ThresholdProps) {
  return (
    <main className="threshold">
      <div className="threshold-content">
        <img src={symbol} className="symbol" alt="Regulate First symbol" />

        <div className="threshold-copy">
          <p className="threshold-line threshold-line-one">
            For just a moment...
          </p>

          <p className="threshold-line threshold-line-two">
            There is nowhere
            <br />
            you need to be.
          </p>

          <p className="threshold-line threshold-line-three">
            Nothing
            <br />
            you need to do.
          </p>

          <div className="threshold-choice-grid">
            <button
              type="button"
              className="threshold-choice-card"
              onClick={onContinue}
            >
              <span>First Visit</span>
              <strong>⌄</strong>
              <em>Begin Journey</em>
            </button>

            <button
              type="button"
              className="threshold-choice-card"
              onClick={onReturning}
            >
              <span>Returning</span>
              <strong>→</strong>
              <em>Continue Journey</em>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Threshold;