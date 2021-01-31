import logo from './logo.svg';
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
      </header>
      <div class="bg-white dark:bg-black">
        <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
        <p class="text-gray-500 dark:text-gray-300">The feature you've all been waiting for.</p>
      </div>
    </div>
  );
}

export default App;
