type RecognitionProps = {
  onContinue: () => void;
};

function Recognition({ onContinue }: RecognitionProps) {
  return (
    <section className="recognition-room">
      <div className="recognition-room-content">
        <div className="recognition-moment recognition-moment-one">
          <p className="recognition-invitation">Have you ever noticed...</p>
          <p className="recognition-setup">that some days...</p>
          <p className="recognition-realization">everything feels harder?</p>
        </div>

        <div className="recognition-moment recognition-moment-two">
          <p className="recognition-invitation">And other days...</p>
          <p className="recognition-setup">the very same life...</p>
          <p className="recognition-realization">feels different.</p>
        </div>

        <button
          type="button"
          className="recognition-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default Recognition;