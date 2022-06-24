import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import html5 from './../Photo/html5.jpg'

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>My Skills</h2>
        <div className={style.skills}>
          <Skill title='HTML/CSS' logo={<img src={html5} className={style.html} alt='logo' />} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>

          <Skill title='JS'
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus deserunt maiores optio quia!'/>

          <Skill title='REACT' description=' Consequatur delectus deserunt maiores optio quia!'/>
          <Skill title='TypeScript' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
          <Skill title='NodeJS' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
          <Skill title='Basic Python' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
        </div>
      </div>
    </div>
  );
};


export default Skills;