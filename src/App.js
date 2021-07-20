import logo from "./logo.svg";
import "./App.css";
import { Button } from "./lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button label="Example" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to create lib in react js
        </a>
      </header>
    </div>
  );
}

export default App;
