import logo from './logo.svg';
import './App.css';
import Datatable from './components/Datatable';
import TotalCard from './components/TotalCard';
import AddEmployeeModal from './components/AddEmployeeModal';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [totalData, setTotalData] = useState([])

  const getData = () => {
    const dataJSON = JSON.parse(localStorage.getItem('employeeData'))
    setData(dataJSON)
  }

  const getTotalData = () => {
    const dataJSON = JSON.parse(localStorage.getItem('employeeData'))
    const totalEmployee = dataJSON?.length
    const totalActiveEmployee = dataJSON?.filter((dat) => dat.status == 1).length
    const totalSalaryExpense = dataJSON?.reduce((accumulator, object) => {
      return accumulator + object.salary;
    }, 0);
    const allTotal = {
      totalEmployee,
      totalActiveEmployee,
      totalSalaryExpense
    }
    setTotalData(allTotal)
  }


  useEffect(() => {
    getData()
    getTotalData()
  }, [])

  return (
    <div className="App">
      <TotalCard datas={totalData} />
      <br/>
      <Datatable datas={data} getData={getData} getTotalData={getTotalData}/>
    </div>
  );
}

export default App;
