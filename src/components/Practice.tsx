type PracticeProps = {
  onBack: () => void;
};

function Practice({ onBack }: PracticeProps) {
  return (
    <section className="placeholder-room">
      <button onClick={onBack}>← Back</button>

      <h1>Practice</h1>

      <p>This room is coming next.</p>
    </section>
  );
}

export default Practice;