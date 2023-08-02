import './TotalCard.css'

const TotalCard = () => {
  const data = {
    totalEmployee: 31,
    totalActiveEmployee: 20,
    totalSalaryExpense: 5000,
  }

  return (
    <div className="container-total">
      <div className="card">
        <h4 className="title">Total Employees</h4>
        <h2 className="nominal">{data.totalEmployee}</h2>
      </div>
      <div className="card">
        <h4 className="title">Total Active Employees</h4>
        <h2 className="nominal">{data.totalActiveEmployee}</h2>
      </div>
      <div className="card">
        <h4 className="title">Total Salary Expenses</h4>
        <h2 className="nominal">${data.totalSalaryExpense}</h2>
      </div>
    </div>
  )
}

export default TotalCard;