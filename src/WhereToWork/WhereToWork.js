import React from 'react';
import style from './Work.module.css'

const WhereToWork = () => {
  return (
    <div className={style.workBlock}>
      <div className={style.workContainer}>
          <span className={style.remote}>I consider the variant of remote job</span>
        <div>
          <button className={style.button}><h2>Hire me</h2></button>
        </div>

      </div>
    </div>
  );
};

export default WhereToWork;