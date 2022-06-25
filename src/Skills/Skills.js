import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import html5Logo from './../Photo/html5.jpg'
import JSLogo from './../Photo/JS.jpg'
import reactLogo from './../Photo/React.jpg'
import tsLogo from './../Photo/TS.jpg'
import nodeJSLogo from './../Photo/NodeJS.jpg'
import pythonLogo from './../Photo/Python.jpg'

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>My Skills</h2>
        <div className={style.skills}>
          <Skill title='HTML/CSS' logo={<img src={html5Logo} className={style.htmlLogo} alt='logo' />} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>

          <Skill title='JS' logo={<img src={JSLogo} className={style.jsLogo} alt='logo' />}
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus deserunt maiores optio quia!'/>

          <Skill title='REACT/REDUX' logo={<img src={reactLogo} className={style.reactLogo} alt='logo' />}
                 description=' Consequatur delectus deserunt maiores optio quia!'/>
          <Skill title='TypeScript' logo={<img src={tsLogo} className={style.tsLogo} alt='logo'/>}
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
          <Skill title='NodeJS' logo={<img src={nodeJSLogo} className={style.nodeJSLogo} alt='logo'/>}
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
          <Skill title='Basic Python' logo={<img src={pythonLogo} className={style.pythonLogo} alt='logo'/>}
                 description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
        </div>
      </div>
    </div>
  );
};


export default Skills;