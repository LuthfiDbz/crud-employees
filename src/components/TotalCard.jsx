import { useEffect } from 'react'
import './TotalCard.css'
import { useState } from 'react'

const TotalCard = ({ datas }) => {
  const [data, setData] = useState({
    totalEmployee: 0,
    totalActiveEmployee: 0,
    totalSalaryExpense: 0,
  })

  useEffect(() => {
    setData(datas)
  }, [datas])

  return (
    <div className="container-total">
      <div className="card">
        <h4 className="title">Total Employees</h4>
        <h2 className="nominal">{data?.totalEmployee}</h2>
      </div>
      <div className="card">
        <h4 className="title">Total Active Employees</h4>
        <h2 className="nominal">{data?.totalActiveEmployee}</h2>
      </div>
      <div className="card">
        <h4 className="title">Total Salary Expenses</h4>
        <h2 className="nominal">${data?.totalSalaryExpense}</h2>
      </div>
    </div>
  )
}

export default TotalCard;