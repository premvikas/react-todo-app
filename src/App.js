import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

const [tasks, setTasks] = useState(
  [
      {
          id:1,
          text: 'Sprint Discussion',
          day: 'day 1',
          remainder: true
      },
      {
          id:2,
          text: 'Deep Work',
          day: 'day 2',
          remainder: true
      },
      {
          id:3,
          text: 'Stand Up Meeting',
          day: 'day 3',
          remainder: false
      }
  ]
)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleRemainder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, remainder : !task.remainder} : task
    )
  )
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

  return (
    <div className="App">
      <h1>React crash course</h1>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
