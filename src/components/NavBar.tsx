import React from "react";
import style from "../styles/navbar.module.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle(style.responsiveNav);
  };

  return (
    <header className={style.navigation}>
      <div className={style.logo}>
        <Link href={"/"}>
          <h1>NG</h1>
          <div className={style.line}></div>
        </Link>
      </div>
      <nav ref={navRef} className={style.navLinks}>
        <Link href={"/"} onClick={showNavBar}>
          Home
        </Link>
        <Link href={"/#portfolio"} onClick={showNavBar}>
          Portfolio
        </Link>
        <Link href={"/#blogs"} onClick={showNavBar}>
          Blog
        </Link>
        <Link href={"/#contact"} onClick={showNavBar}>
          Contact
        </Link>
        <button
          className={`${style.navBtn} ${style.navCloseBtn}`}
          onClick={showNavBar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={style.navBtn} onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
