import React from 'react';
import style from './Main.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import loki from './../Photo/loki.jpg'

const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
          <div className={style.text}>
            <span>Hi everyone!!!</span>
            <h1>I am Dmitry Patskalev</h1>
            <p>Front-end developer<br/>
              HTML/CSS/JS/REACT/TS</p>
          </div>
          <div className={style.photo}>{<img src={loki} alt='loki' className={style.ava}/>}</div>
      </div>
    </div>
  );
};

export default Main;