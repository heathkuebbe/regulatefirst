type UnderstandProps = {
  onBack: () => void;
};

function Understand({ onBack }: UnderstandProps) {
  return (
    <section className="placeholder-room">
      <button onClick={onBack}>← Back</button>

      <h1>Understand</h1>

      <p>This room is coming next.</p>
    </section>
  );
}

export default Understand;