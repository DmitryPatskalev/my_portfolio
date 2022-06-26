import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import WhereToWork from "./WhereToWork/WhereToWork";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <WhereToWork/>
      <Contact/>
    </div>
  );
}

export default App;
