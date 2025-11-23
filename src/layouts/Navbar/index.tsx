import { useState } from "react";
import { navBarConst } from "../../constants";
import CustomImage from "../../lib/CustomeImage";
import CustomTypography from "../../lib/Typography";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navWrapper}>
      {/* Mobile Left: Hamburger */}
      <div className={styles.mobileLeft}>
        <CustomImage
          onClick={() => setOpen((prev) => !prev)}
          className={styles.hamburger}
          src={!open ? "/assets/hamburger.svg" : "/assets/cross.svg"}
          width={28}
          height={28}
        />
      </div>

      {/* Center Logo */}
      <div className={styles.centerLogo}>
        <CustomImage src="/assets/car.svg" width={40} height={28} />
        <CustomTypography variant="subtitle" className={styles.header}>
          Drive lah
        </CustomTypography>
      </div>

      {/* Mobile Right: Profile */}
      <div className={styles.mobileRight}>
        <CustomImage
          className={styles.profileIcon}
          src="/assets/profile.jpg"
          width={32}
          height={32}
        />
      </div>

      {/* Desktop Menu */}
      <div className={styles.desktopMenu}>
        {navBarConst?.map((item) => (
          <div key={item.label} className={styles.navItem}>
            {item.label}
          </div>
        ))}
        <CustomImage
          className={styles.profileIcon}
          src="/assets/profile.jpg"
          width={30}
          height={30}
        />
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`${styles.mobileMenu} ${
          open ? styles.menuOpen : styles.menuClose
        }`}>
        {navBarConst?.map((item) => (
          <div key={item.label} className={styles.mobileItem}>
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
