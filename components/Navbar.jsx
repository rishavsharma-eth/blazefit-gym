import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Components Import
import Header from '../components/Header';
import CompanyLogos from '../components/CompanyLogos';
import OurPrograms from '../components/OurPrograms';
import ChooseUs from '../components/ChooseUs';
import Pricing from '../components/Pricing';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';


// Opening and closing Nav menu when clicked on menuOpen and menuClose btn
const menuOpen = async (e) => {
    e.preventDefault();
    if (typeof window != "undefined") {
        let navMenu = document.querySelector("#navMenu");
    }
    navMenu.style.right = "0";
}

const menuClose = (e) => {
    e.preventDefault();
    if (typeof window != "undefined") {
        let navMenu = document.querySelector("#navMenu");
    }
    navMenu.style.right = "-100%";
}

// Closing the menu if use click on any navLink
const linkAction = (e) => {
    e.preventDefault();
    let navMenu = document.querySelector("#navMenu");
    navMenu.style.right = "-100%";
}
if (typeof window != "undefined") {
    let mobNavLink = document.querySelector("#mobNavLink");
    mobNavLink.addEventListener('click', () => {
        let navMenu = document.querySelector("#navMenu");
        navMenu.style.right = "-100%";
    })
}

// Change background of header after scrolls a certain distance on the screen
const scrollBackground = () => {
    if (typeof window != "not defined") {
        let navWrapper = document.querySelector("#navWrapper");
    }
    navWrapper.style.boxShadow = "rgba(236, 236, 236, 0.453) 0px 8px 24px;"
    navWrapper.style.backgroundColor = "black";
}
if (typeof window !== "undefined") {
    window.addEventListener('scroll', scrollBackground)
}

// Clicking on logo will bring back to home page
if (typeof window !== "undefined") {
    let logoText = document.querySelector("#logoText");
    logoText.addEventListener("click", () => {
        window.scrollTo(0, 0);
    })
}

// ScrollUp
const scrollUp = (e) => {
    let scrollUpDiv = document.querySelector("#scrollUp")
    scrollY > 350 ? scrollUpDiv.style.bottom = "2rem" : scrollUpDiv.style.bottom = "-30%";
}
if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollUp)
}

const Navbar = () => {

    // Closing the nav menu if user clicks anywhere on the screen except the menu itself
    const menuRef = useRef();
    useEffect(() => {
        if (typeof window != "undefined") {
            let main = document.querySelector("#main");
            let navMenu = document.querySelector("#navMenu");
            main.addEventListener('click', (e) => {
                if (!menuRef.current.contains(e.target)) {
                    e.preventDefault();
                    navMenu.style.right = "-100%";

                }
            })
        }
    }, [])
    return (
        // {/* Navigation */}
        <div className={styles.navContainer} id="navContainer" >
            <div className={styles.navWrapper} id="navWrapper">
                <div className={styles.logoText} id="logoText">
                    <span className={styles.logoText1}>Blaze</span>
                    <span className={styles.logoText2}>fit</span>
                </div>
                <a href="" onClick={menuOpen} id="menuOpen"><MenuIcon className={styles.menuIcon} /></a>

                <div className={styles.navMenu} id="navMenu" ref={menuRef}>
                    <ul className={styles.navMenuList}>
                        <Link href="#header"><a className={styles.activeLink} id="homeLink"><li className={styles.navItem}>Home</li></a></Link>
                        <Link href="#programs"><a id="mobNavLink"><li className={styles.navItem}>Program</li></a></Link>
                        <Link href="#chooseUs"><a id="mobNavLink"><li className={styles.navItem}>Choose us</li></a></Link>
                        <Link href="#pricing"><a id="mobNavLink"><li className={styles.navItem}>Pricing</li></a></Link>
                        <Link href="#pricing"><a id="mobNavLink"><li className={[styles.navRegistration]}>Register Now</li></a></Link>
                    </ul>
                    <div onClick={menuClose}><CloseIcon className={styles.closeIcon} /></div>
                </div>
                <div className={styles.navMenuLg}>
                    <ul className={styles.navMenuLgList}>
                        <Link href="#header"><a className={styles.activeLink} id="homeLink"><li className={styles.navLgItem}>Home</li></a></Link>
                        <Link href="#programs" ><a id="mobNavLink"><li className={styles.navLgItem}>Program</li></a></Link>
                        <Link href="#chooseUs"><a id="mobNavLink"><li className={styles.navLgItem}>Choose us</li></a></Link>
                        <Link href="#pricing"><a id="mobNavLink"><li className={styles.navLgItem}>Pricing</li></a></Link>
                        <Link href="#pricing"><a id="mobNavLink"><li className={[styles.navLgRegistration]}>Register</li></a></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar