import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState("");
const navigate = useNavigate();
  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/v1/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };
const addTask = async () => {

  try {

    const token = localStorage.getItem("token");
if (title.trim() === "") {

  alert("Task title required");

  return;

}
    await axios.post(
      "http://localhost:5000/api/v1/tasks",
      {
        title
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setTitle("");

    fetchTasks();

  } catch (error) {

    console.log(error);

  }

};
const deleteTask = async (id) => {

  try {

    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/v1/tasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchTasks();

  } catch (error) {

    console.log(error);

  }

};

 useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {

    navigate("/");

  } else {

    fetchTasks();

  }

}, []);
const logout = () => {

  localStorage.removeItem("token");

  navigate("/");

};
  return (

    <div>

      <h2>Dashboard</h2>
      <button onClick={logout}>
  Logout
</button>

<br /><br />
<input
  type="text"
  placeholder="Enter task"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<button onClick={addTask}>
  Add Task
</button>

<br /><br />
      <h3>Your Tasks</h3>

      {
        tasks.map((task) => (

          <div key={task._id}>

           <p>
  {task.title}

  <button
    onClick={() => deleteTask(task._id)}
  >
    Delete
  </button>
</p>

          </div>

        ))
      }

    </div>

  );

}

export default Dashboard;