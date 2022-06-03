import './components/Table';
import './App.css';
import VistaAutos from './screens/Vista';
import VistaBicis from './screens/VistaBicis';
import VistaContacto from './screens/VistaContacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VistaContacto/>
      </header>
    </div>
  );
}

export default App;
