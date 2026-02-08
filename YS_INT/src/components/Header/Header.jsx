import styles from "./Header.module.css";

export default function Header() {
  // Mock user data - in production this would come from auth context
  const currentUser = {
    name: "Admin User",
    role: "Administrator",
    initials: "AU",
  };

  return (
    <header className={styles.header}>
      {/* Logo and Title Section */}
      <div className={styles.logoSection}>
        <div className={styles.logo}>📦</div>
        <div>
          <h1 className={styles.title}>Container Yard Management</h1>
          <p className={styles.subtitle}>Enterprise Resource Planning System</p>
        </div>
      </div>

      {/* User Information Section */}
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{currentUser.name}</p>
          <p className={styles.userRole}>{currentUser.role}</p>
        </div>
        <div className={styles.userAvatar}>{currentUser.initials}</div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
}
