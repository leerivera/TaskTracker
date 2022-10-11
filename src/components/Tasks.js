import React from 'react'

const tasks = [
    {
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
    }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
          <h3>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks