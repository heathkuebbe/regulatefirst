import symbol from "../assets/rf-symbol.png";

type ThresholdProps = {
  onContinue: () => void;
};

function Threshold({ onContinue }: ThresholdProps) {
  return (
    <main className="threshold">
      <div className="threshold-content">
        <img
          src={symbol}
          className="symbol"
          alt="Regulate First symbol"
        />

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

          <button
            type="button"
            className="threshold-chevron"
            onClick={onContinue}
            aria-label="Continue to welcome"
          >
            ⌄
          </button>
        </div>
      </div>
    </main>
  );
}

export default Threshold;