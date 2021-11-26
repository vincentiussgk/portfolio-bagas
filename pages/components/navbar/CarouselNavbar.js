import React from 'react'
import styles from "./CarouselNavbar.module.css";

import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    let burgerStyle = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '20px',
          top: '10px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          width: "300px"
        },
        bmMenu: {
          background: '#000',
          padding: '2em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'flex',
          flexDirection: 'column',
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        },
        controlNext: {
            marginRight: "200px"
        }
      }
    return (
        <nav className={styles.navContainer}>
            <div className={styles.innerContainer}>
                <div>
                    <a className={styles.navItemBold} href="/">
                        Home
                    </a>
                    <a className={styles.navItemBold} href="/about">
                        About
                    </a>
                    <a className={styles.navItemNormal}>
                        RUPA/MAYA
                    </a>
                </div>
                <div id="wrapper" className={styles.wrapperContainer}>
                    <Menu styles={burgerStyle} right outerContainerId={"wrapper"}>
                        <div>
                            <a className={styles.menuItem} href="/">Home</a>
                            <a className={styles.menuItem} href="/about">About</a>
                            <a className={styles.menuItem} ><span className={styles.rupaBurger}>RUPA/MAYA</span></a>
                        </div>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
