import { IoCloseSharp } from "react-icons/io";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import './AddEmployeeModal.css'
import { useState } from "react";
import { useEffect } from "react";

const AddEmployeeModal = ({ open, setOpen, onFinish }) => {
  const [inputData, setInputData] = useState({
    id: '',
    employeeId: '',
    name: '',
    email: '',
    department: '',
    jobdesk: '',
    salary: 0,
    status: 1
  })
  const [dataValid, setDataValid] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()

    let errors = {};
    if (!inputData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = "Email is invalid";
    }

    setDataValid(errors)

    if (Object.keys(errors).length === 0) {
      onFinish(inputData)
    }


  }

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  useEffect(() => {
    if (open.action === 'edit') {
      setInputData({
        id: open?.data?.id,
        employeeId: open?.data?.employeeId,
        name: open?.data?.name,
        email: open?.data?.email,
        department: open?.data?.department,
        jobdesk: open?.data?.jobdesk,
        salary: open?.data?.salary,
        status: open?.data?.status
      })
    } else {
      const id = uniqueId()
      setInputData({
        id: id,
        employeeId: '',
        name: '',
        email: '',
        department: '',
        jobdesk: '',
        salary: 0,
        status: 1
      })
    }

    setDataValid({})

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
              required
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
              required
              placeholder="Type employee email..."
              value={inputData.email}
              onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
              className={`${dataValid.email ? 'error' : ''}`}
            />
            {dataValid.email && <p>{dataValid.email}</p>}
            <br />

            <label htmlFor="department">Department</label>
            <br />
            <input
              type="text"
              name="department"
              id="department"
              required
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
              required
              placeholder="Type employee jobdesk..."
              value={inputData.jobdesk}
              onChange={(e) => setInputData({ ...inputData, jobdesk: e.target.value })}
            />
            <br />

            <label htmlFor="salary">Salary</label>
            <br />
            <input
              type="number"
              name="salary"
              id="salary"
              required
              min={1}
              placeholder="Type employee salary..."
              value={inputData.salary}
              onChange={(e) => setInputData({ ...inputData, salary: parseInt(e.target.value) })}
            />
            <br />

            <label className='status'>Status</label>
            <br />
            <input
              type="radio"
              name="status"
              id="active"
              value='active'
              checked={inputData.status == 1}
              onChange={() => setInputData({ ...inputData, status: 1 })}
            />
            <label className="status-label">Active</label>
            <br />
            <input
              type="radio"
              name="status"
              id="inactive"
              checked={inputData.status == 0}
              onChange={() => setInputData({ ...inputData, status: 0 })}
            />
            <label className="status-label">Inactive</label>
            {/* <input
              type="text"
              name="status"
              id="status"
              value={inputData.status}
              onChange={(e) => setInputData({ ...inputData, status: e.target.value })}
            /> */}
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