import { useState } from 'react'

function App() {
  const [tasks,setTasks]=useState([])
  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState("")
  const [task,newTask]=useState("")
  
  return (
    <>
    <h1>TO-DO List</h1>
      <form  method="post">
        <input type="text" name="name" placeholder="Enter Task"/><br />
        <input type="date" name="deadline" placeholder="Deadline" /><br />
        <select name="prior" defaultChecked>
          <option value="high">High</option>
          <option value="morderate">Morderate</option>
          <option value="low">Less Prior</option>
        </select><br />
        <select name="status" >
          <option value="completed">Completed</option>
          <option value="yet">Yet To Complete</option>
        </select>
        {/* <button type="submit" onClick={addTask}>Add Task</button> */}
      </form>
      <h3>Task List</h3>
      <table>
        <tr>
          <th>Task Name</th>
          <th>Deadline</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <>
          {/* {tasks.map((i)=>{
            <td>{i.name}</td>
            <td>{i.deadline}</td>
            <td>{i.prior}</td>
            <td>{i.status}</td>
            <td>
              <button onclick={updateStatus}>Update Status</button>
            </td>
            <td>
              <button onclick={deleteTask}>Delete Task</button>
            </td>
          });} */}
          </>
        </tr>
      </table>
    </>
  )
}

export default App
