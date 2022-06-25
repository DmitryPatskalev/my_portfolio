import React from 'react';
import style from './Project.module.css'


const Project = (props) => {
  return (
    <div className={style.projects}>
      <div className={style.icon}>{props.logo}</div>
        <div className={style.title}>{props.title}</div>
        <span>{props.description}</span>
      </div>

  );
};

export default Project;

