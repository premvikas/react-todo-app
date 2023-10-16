import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

const [tasks, setTasks] = useState(
  [
      {
          id:1,
          text: 'Sprint Discussion',
          day: 'day 1',
          remainder: false
      },
      {
          id:2,
          text: 'Deep Work',
          day: 'day 2',
          remainder: false
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
  console.log('delete task', id);
  setTasks(tasks.filter((task) => task.id !== id));
}

  return (
    <div className="App">
      <h1>React crash course</h1>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
