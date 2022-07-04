import React from 'react';
import style from './Project.module.css'


const Project = (props) => {
  return (
    <div className={style.projects}>
      <div className={style.icon} title='Click to know more'>{props.logo}</div>
        <div className={style.title}>{props.title}</div>
        <span className={style.description}>{props.description}</span>
      </div>

  );
};

export default Project;

