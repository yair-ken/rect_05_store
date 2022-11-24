import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-main'>
        <Main/>
        <Cart/>
      </div>
    </div>
  );
}

export default App;

