import React from 'react'
import { useState } from 'react'


const Tasks = () => {
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
  return (
    <>
      {tasks.map((task) => (
          <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks