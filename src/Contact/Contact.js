import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

const Contact = () => {
  return (
    <div className={style.contactBlock}>
      <div className={`${styleContainer.container} ${style.contactContainer}`}>
        <h2 className={style.title}>Contact</h2>
        <form>
          <div>
            <div>
              <input  className={style.input1} type="text"/>
            </div>
            <div>
              <input className={style.input2} type="text"/>
            </div>
            <div>
              <textarea  className={style.textArea} >
              </textarea>
            </div>
          </div>
        </form>
        <div>
          <button className={style.buttonSend}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;