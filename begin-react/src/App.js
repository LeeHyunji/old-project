import logo from './logo.svg';
import Hello from './hello.js';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Wrapper>
          <Hello name="hyunji" color="blue"/>
          <Hello color="green"/>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
