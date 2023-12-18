import React from "react";
import style from '@/styles/footer.module.css';
import LinkedIn from 'images/icons/linkedin.png'
import GitHub from 'images/icons/github.png'

export default function Footer() {
  return (
   <footer className={style.footer}>
        <p>noahgiboney © 2023</p>
                <a href="https://www.linkedin.com/in/noah-giboney-896847261/"><img src={LinkedIn.src} className="round"/></a>
                <a href="https://github.com/noahgiboney"><img src={GitHub.src} className="round"/></a>
    </footer>
  );
}