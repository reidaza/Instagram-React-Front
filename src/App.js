import './App.css';

import { Header } from './Header';
import { Section } from './Section';
import { Aside } from './Aside';
import { PostArticle } from './PostArticle';

function App() {
  return (
    <div className="App">
      <Header className="Header"/>
      <div className="Contenedor">
        <div>
          <Section className="Section"/>
          <div className="Article" >
          <PostArticle/>
          </div>
        </div>
        <Aside className="Aside"/>
      </div>
    </div>
  );
}

export default App;
