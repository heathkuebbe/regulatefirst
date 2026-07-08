type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onPractice: () => void;
  onVision: () => void;
};

function MenuDrawer({
  isOpen,
  onClose,
  onBegin,
  onInvitation,
  onUnderstand,
  onPractice,
  onVision,
}: MenuDrawerProps) {
  if (!isOpen) return null;

  const handleNavigate = (navigate: () => void) => {
    navigate();
    onClose();
  };

  return (
    <div className="menu-drawer-backdrop" onClick={onClose}>
      <aside className="menu-drawer" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="menu-drawer-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>

        <p className="menu-drawer-brand">Regulate First</p>

        <nav className="menu-drawer-nav">
          <button type="button" onClick={() => handleNavigate(onBegin)}>
            Begin
          </button>

          <button type="button" onClick={() => handleNavigate(onInvitation)}>
            Invitation
          </button>

          <button type="button" onClick={() => handleNavigate(onUnderstand)}>
            Understand
          </button>

          <button type="button" onClick={() => handleNavigate(onVision)}>
            Vision
          </button>
          
          <button type="button" onClick={() => handleNavigate(onPractice)}>
            Practice
          </button>

          <a
            href="mailto:heath@regulatefirst.com?subject=Regulate%20First%20Question"
            className="menu-drawer-contact"
           >
            Contact
          </a>

        </nav>
      </aside>
    </div>
  );
}

export default MenuDrawer;