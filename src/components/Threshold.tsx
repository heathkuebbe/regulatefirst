import symbol from "../assets/rf-symbol.png";

function Threshold() {
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

          <div
            className="threshold-chevron"
            onClick={() =>
                document.getElementById("welcome")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    document.getElementById("welcome")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }}
        >
         ⌄
        </div>
        </div>
      </div>
    </main>
  );
}

export default Threshold;