type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="menu-drawer-backdrop">
      <aside className="menu-drawer">
        <button
          type="button"
          className="menu-drawer-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>

        <p className="menu-drawer-kicker">Menu</p>

        <nav className="menu-drawer-nav">
          <button type="button">Begin</button>
          <button type="button">Understand</button>
          <button type="button">Practice</button>
        </nav>

        <p className="menu-drawer-note">
          More paths coming soon.
        </p>
      </aside>
    </div>
  );
}

export default MenuDrawer;