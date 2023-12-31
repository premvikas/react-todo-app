import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

const [showAddTask, setShowAddTask] = useState(false);
const [tasks, setTasks] = useState([]);

useEffect(() => {
  const getTasks = async () => {
    const taskFromServer = await fetchTasks();
    setTasks(taskFromServer);
  }

  getTasks();
},[])

const deleteTask =async(id) => {
  await fetch(`http://localhost:5001/tasks/${id}`,{
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleRemainder = async(id) => {

  const taskToToggle = await fetchTask(id);
  const updTask = { ...taskToToggle, "remainder": !taskToToggle.remainder }

    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: data.remainder } : task
      )
    )
}

const addTask = async (task) => {
  const res = await fetch(`http://localhost:5001/tasks`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json();
  setTasks([...tasks, data]);
}

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5001/tasks')
  const data = await res.json()

  return data
}

// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5001/tasks/${id}`)
  const data = await res.json()

  return data
}

  return (
    <div className="App">
      <h1>React crash course</h1>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
