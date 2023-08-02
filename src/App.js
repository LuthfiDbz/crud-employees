import logo from './logo.svg';
import './App.css';
import Datatable from './components/Datatable';
import TotalCard from './components/TotalCard';
import AddEmployeeModal from './components/AddEmployeeModal';

function App() {
  return (
    <div className="App">
      <TotalCard />
      <br/>
      <Datatable />
    </div>
  );
}

export default App;
