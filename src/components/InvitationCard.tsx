type InvitationCardProps = {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc?: string;
  badge?: string;
  points?: string[];
  onClick: () => void;
};

function InvitationCard({
  title,
  description,
  imageAlt,
  imageSrc,
  badge,
  points = [],
  onClick,
}: InvitationCardProps) {
  return (
    <article className="invitation-card">
      <div className="invitation-card-image-wrap">
        {imageSrc ? (
          <img className="invitation-card-image" src={imageSrc} alt={imageAlt} />
        ) : (
          <div className="invitation-card-image-placeholder" aria-label={imageAlt} />
        )}
      </div>

      <div className="invitation-card-copy">
        {badge && <p className="invitation-card-badge">{badge}</p>}

        <h2 className="invitation-card-title">{title}</h2>

        <div className="invitation-card-rule" />

        <p className="invitation-card-description">{description}</p>

        {points.length > 0 && (
          <ul className="invitation-card-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="invitation-card-button"
          onClick={onClick}
        >
          Explore this path <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

export default InvitationCard;