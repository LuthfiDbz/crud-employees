import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import './Datatable.css'
import AddEmployeeModal from "./AddEmployeeModal";
import { useState } from "react";
import { useEffect } from "react";

const Datatable = () => {
  const [openModal, setOpenModal] = useState({ visible: false })
  const [data, setData] = useState([])

  const getData = () => {
    const dataJSON = JSON.parse(localStorage.getItem('employeeData'))
    console.log(dataJSON)
    setData([dataJSON])
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAddEmployee = (val) => {
    console.log(val)
    localStorage.setItem('employeeData', JSON.stringify(val))
    setOpenModal({ visible: false })
    getData()
  }

  const handleDeleteEmployee = () => {

  }

  return (
    <div className="container-table">
      <div className="header">
        <h3 className="header-title">Employee List</h3>
        <div
          className="addBtn"
          onClick={() => setOpenModal({ visible: true, action: 'add' })}
        >Add Employee</div>
      </div>
      <div class="divTable cinereousTable">
        <div class="divTableHeading">
          <div class="divTableRow">
            <div class="divTableHead">ID</div>
            <div class="divTableHead">Name</div>
            <div class="divTableHead">Email</div>
            <div class="divTableHead">Department</div>
            <div class="divTableHead">Jobdesk</div>
            <div class="divTableHead">Salary</div>
            <div class="divTableHead">Status</div>
            <div class="divTableHead">Actions</div>
          </div>
        </div>
        <div class="divTableBody">
          {data.map((dat) => {
            return (
              <div class="divTableRow">
                <div class="divTableCell">{dat?.id}</div>
                <div class="divTableCell">{dat?.name}</div>
                <div class="divTableCell">{dat?.email}</div>
                <div class="divTableCell">{dat?.department}</div>
                <div class="divTableCell">{dat.jobdesk}</div>
                <div class="divTableCell">${dat.salary}</div>
                <div class="divTableCell">{dat.status == 1 ? 'Active' : 'Inactive'}</div>
                <div class="divTableCell action">
                  <AiFillEdit
                    size={25}
                    color="blue"
                    style={{ marginRight: '1rem', cursor: 'pointer' }}
                  />
                  <AiFillDelete
                    size={25}
                    color="red"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AddEmployeeModal
        open={openModal}
        setOpen={setOpenModal}
        onFinish={handleAddEmployee}
      />
    </div>
  )
}

export default Datatable;