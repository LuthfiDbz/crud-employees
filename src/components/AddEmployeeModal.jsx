import { IoCloseSharp } from "react-icons/io";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import './AddEmployeeModal.css'
import { useState } from "react";
import { useEffect } from "react";

const AddEmployeeModal = ({ open, setOpen, onFinish }) => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    department: '',
    jobdesk: '',
    salary: 0,
    status: 1
  })

  const onSubmit = (e) => {
    e.preventDefault()
    onFinish(inputData)
  }

  useEffect(() => {
    setInputData({
      name: '',
      email: '',
      department: '',
      jobdesk: '',
      salary: 0,
      status: 1
    })
  }, [open])

  return (
    open.visible ?
      <div className="overlay">
        <form className="container-modal" onSubmit={onSubmit}>
          <div className="header-modal">
            <h3>{open.action === 'add' ? 'Add' : 'Edit'} Employee</h3>
            <AiOutlineClose
              style={{
                cursor: 'pointer',
                color: 'white',
                fontSize: '1.3rem'
              }}
              width={50}
              onClick={() => setOpen({ visible: false })}
            />
          </div>
          <div className="body-modal">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type employee name..."
              value={inputData.name}
              onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
            />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Type employee email..."
              value={inputData.email}
              onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
            />
            <br />

            <label htmlFor="department">Department</label>
            <br />
            <input
              type="text"
              name="department"
              id="department"
              placeholder="Type employee department..."
              value={inputData.department}
              onChange={(e) => setInputData({ ...inputData, department: e.target.value })}
            />
            <br />

            <label htmlFor="jobdesk">Jobdesk</label>
            <br />
            <input
              type="text"
              name="jobdesk"
              id="jobdesk"
              placeholder="Type employee jobdesk..."
              value={inputData.jobdesk}
              onChange={(e) => setInputData({ ...inputData, jobdesk: e.target.value })}
            />
            <br />

            <label htmlFor="salary">Salary</label>
            <br />
            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="Type employee salary..."
              value={inputData.salary}
              onChange={(e) => setInputData({ ...inputData, salary: e.target.value })}
            />
            <br />

            <label htmlFor="status">Status</label>
            <br />
            <input
              type="text"
              name="status"
              id="status"
              value={inputData.status}
              onChange={(e) => setInputData({ ...inputData, status: e.target.value })}
            />
          </div>
          <hr />
          <div className="footer-modal">
            <button
              className="btn add"
            >{open.action === 'add' ? 'Add' : 'Save'}</button>
            <button
              className="btn cancel"
              onClick={() => setOpen({ visible: false })}
            >Cancel</button>
          </div>
        </form>
      </div>
      : null
  )
}

export default AddEmployeeModal;