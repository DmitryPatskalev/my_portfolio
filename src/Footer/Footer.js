import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Dmitry Patskalev</h2>
        <div className={style.squareBlock}>
            <span className={style.square1}></span>
            <span className={style.square2}></span>
            <span className={style.square3}></span>
            <span className={style.square4}></span>
        </div>
        <span className={style.sign}>© 2022 All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;