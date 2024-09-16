import logo from './logo.svg';
import './App.css';
import Lists from './components/Lists';
import Button from './components/Button';
import { personList, imageUrls, article } from './constant/data';
import ImageLists from './components/ImageLists';
import Form from './components/Form';
import Article from './components/Article';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Article text={article}/>
      <Form/>
        <Lists person={ personList} />
        <Button onClick={() => alert('Hello!')} editable={true} />
        <ImageLists imageLists={imageUrls} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
