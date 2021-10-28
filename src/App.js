import './App.css';
import MultipleSelector from './components/multipleSelector';

function App() {
  return (
    <div className='App'>
      <MultipleSelector question='Quelles sauces ?' datatype='sauces' limit='2'/>
    </div>
  );
}

export default App;
