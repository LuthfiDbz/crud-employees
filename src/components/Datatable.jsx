import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import './Datatable.css'
import AddEmployeeModal from "./AddEmployeeModal";
import { useState } from "react";
import { useEffect } from "react";

const Datatable = ({ datas, getData, getTotalData }) => {
  const [openModal, setOpenModal] = useState({ visible: false })
  const [data, setData] = useState([])

  useEffect(() => {
    setData(datas)
  }, [datas])

  const handleAddEmployee = (val) => {
    let payload = []
    if (openModal.action === 'edit') {
      const index = data?.findIndex((dat) => dat.id === openModal?.data?.id)
      let tempData = data
      tempData[index] = val
      payload = tempData
    } else {
      data ? payload = [...data, val] : payload = [val]
    }

    localStorage.setItem('employeeData', JSON.stringify(payload))
    setOpenModal({ visible: false })
    getData()
    getTotalData()
  }

  const handleDeleteEmployee = (id) => {
    const filterData = data?.filter((dat) => dat.id !== id)
    localStorage.setItem('employeeData', JSON.stringify(filterData))
    getData()
    getTotalData()
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
            <div class="divTableHead">No</div>
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
          {data?.map((dat, index) => {
            return (
              <div class="divTableRow" key={dat?.id}>
                <div class="divTableCell">{index + 1}</div>
                <div class="divTableCell">{dat?.name}</div>
                <div class="divTableCell">{dat?.email}</div>
                <div class="divTableCell">{dat?.department}</div>
                <div class="divTableCell">{dat.jobdesk}</div>
                <div class="divTableCell">${dat.salary}</div>
                <div class={`divTableCell ${dat.status == 1 ? 'active' : 'inactive'}`}><span>{dat.status == 1 ? 'Active' : 'Inactive'}</span></div>
                <div class="divTableCell action">
                  <AiFillEdit
                    size={25}
                    color="blue"
                    style={{ marginRight: '1rem', cursor: 'pointer' }}
                    onClick={() => setOpenModal({ visible: true, action: 'edit', data: dat })}
                  />
                  <AiFillDelete
                    size={25}
                    color="red"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteEmployee(dat?.id)}
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