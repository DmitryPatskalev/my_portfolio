import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>My Skills</h2>
        <div className={style.skills}>
          <Skill title='HTML/CSS/JS' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>

          <Skill title='REACT'
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus deserunt maiores optio quia!'/>

          <Skill title='TS' description=' Consequatur delectus deserunt maiores optio quia!'/>

        </div>
      </div>
    </div>
  );
};


export default Skills;