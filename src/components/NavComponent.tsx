import React from "react";
import style from "../styles/navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={style.navigation}>
    <ul> 
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/#about'}>About</Link></li>
        <li><Link href={'/#portfolio'}>Portfolio</Link></li>
        <li><Link href={'/#blogs'}>Blog</Link></li>
        <li><Link href={'/#contact'}>Contact</Link></li>
    </ul>
    </header>
  );
}
        