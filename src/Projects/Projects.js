import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Project from "./Project/Project";
import todolist from './../Photo/todolist.jpg'
import socialNet from './../Photo/socialNet.jpg'



const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>My projects</h2>
        <div className={style.projectsList}>
          <Project
            logo={<img src={todolist} className={style.todolist} alt='logo'/>}
            title='TodoList'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias asperiores deleniti ducimus eveniet
  expedita explicabo impedit iste necessitatibus nesciunt'
          />
          <Project
            logo={<img src={socialNet} className={style.socialNet} alt='logo'/>}
            title='Social Network'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias asperiores deleniti ducimus eveniet
  expedita explicabo impedit iste necessitatibus nesciunt'
          />
        </div>

      </div>
    </div>

  );
};

export default Projects;
