import logo from './logo.svg';
import './App.css';
import CounterComponet from './CounterComponent';

const App = () => {
  return (
    <div className="App">
     <CounterComponet initialCount={0} a={5} b />
    </div>
  );
}

export default App;
