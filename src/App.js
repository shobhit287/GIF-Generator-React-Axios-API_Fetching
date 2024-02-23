import './App.css';
import RandomGIF from './components/RandomGIF';
import ManualGIF from './components/ManualGIF';
function App() {
  return (
    <div className="App">
      <h1>GIF Generator</h1>
      <div className="generator_body">
        <RandomGIF/>
        <ManualGIF/>
      </div>
    </div>
  );
}

export default App;
