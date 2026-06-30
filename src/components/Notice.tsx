type NoticeProps = {
  onContinue: () => void;
};

function Notice({ onContinue }: NoticeProps) {
  return (
    <section className="notice-room">
      <div className="notice-room-content">
        <p className="notice-kicker">
          Simply notice...
        </p>

        <div className="notice-list">
          <p className="notice-item notice-item-one">Energy</p>
          <p className="notice-item notice-item-two">Body</p>
          <p className="notice-item notice-item-three">Heart</p>
          <p className="notice-item notice-item-four">Mind</p>
        </div>

        <button
          type="button"
          className="notice-chevron"
          onClick={onContinue}
          aria-label="Continue"
        >
          ⌄
        </button>
      </div>
    </section>
  );
}

export default Notice;