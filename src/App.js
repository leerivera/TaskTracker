import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(    [{
    id:1,
    text: 'Duolingo',
    day: 'Oct 11th at 9:00am',
    reminder: true
},
{
    id:2,
    text: "Write bits",
    day: 'Oct 11th at 11:00am',
    reminder: true,

},
{
    id:3,
    text: "Exercise",
    day: 'Oct 11th at 12:00pm',
    reminder: false,
},
])

// add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// delete by id
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}
  return ( 
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ('You got nothing bro')}
    </div>
  )
}

export default App;
