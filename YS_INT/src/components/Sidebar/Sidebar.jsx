import styles from "./Sidebar.module.css";

/**
 * Navigation button component with icon and label
 * @param {string} screen - Screen identifier for navigation
 * @param {string} label - Button label text
 * @param {string} icon - Icon emoji
 * @param {string} activeScreen - Currently active screen
 * @param {function} onNavigate - Navigation handler function
 */
function NavButton({ screen, label, icon, activeScreen, onNavigate }) {
  const isActive = activeScreen === screen;

  return (
    <button
      className={`${styles.navButton} ${
        isActive ? styles.navButtonActive : ""
      }`}
      onClick={() => onNavigate(screen)}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </button>
  );
}

/**
 * Sidebar Navigation Component
 * Provides navigation to all ERP modules with visual active state
 * @param {string} activeScreen - Current active screen identifier
 * @param {function} onNavigate - Function to change active screen
 */
export default function Sidebar({ activeScreen, onNavigate }) {
  return (
    <aside className={styles.sidebar}>
      {/* Section Title */}
      <h3 className={styles.navTitle}>Main Navigation</h3>

      {/* Company Section */}
      <NavButton
        screen="create-company"
        label="Create Company"
        icon="🏢"
        activeScreen={activeScreen}
        onNavigate={onNavigate}
      />

      <div className={styles.divider} />

      {/* Users Section */}
      <h3 className={styles.sectionTitle}>User</h3>
      <NavButton
        screen="users"
        label="User"
        icon="👤"
        activeScreen={activeScreen}
        onNavigate={onNavigate}
      />

      <div className={styles.divider} />

      {/* Operations Section */}
      <h3 className={styles.sectionTitle}>Operations</h3>
      <NavButton
        screen="parties"
        label="Parties"
        icon="🏪"
        activeScreen={activeScreen}
        onNavigate={onNavigate}
      />
      <NavButton
        screen="gate-in"
        label="Gate In"
        icon="🚪➡️"
        activeScreen={activeScreen}
        onNavigate={onNavigate}
      />
      <NavButton
        screen="gate-out"
        label="Gate Out"
        icon="🚪⬅️"
        activeScreen={activeScreen}
        onNavigate={onNavigate}
      />
    </aside>
  );
}
