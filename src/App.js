import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import Cart from './layout/Cart';

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

