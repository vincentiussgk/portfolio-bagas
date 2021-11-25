import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = ({ isAbout }) => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.navItemBold}>
                    Home
                </div>
                <div className={styles.navItemBold}>
                    About
                </div>
                <div className={styles.navItemNormal}>
                    RUPA/MAYA
                </div>
            </div>
        </nav>
    )
}

export default Navbar
