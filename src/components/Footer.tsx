import React from "react";
import style from '@/styles/footer.module.css';

export default function Footer() {
  return (
   <footer className={style.footer}>
        <p>Created by Noah Giboney © 2023</p>
                <a href="https://www.linkedin.com/in/noah-giboney-896847261/"><img src="/images/icons/linkedin.png" className="round"/></a>
                <a href="https://github.com/noahgiboney"><img src="/images/icons/github.png" className="round"/></a>
    </footer>
  );
}