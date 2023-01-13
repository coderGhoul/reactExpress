import React, { memo, useState, useReducer } from 'react'

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]
let curretIndex = 3
export default memo(function Templacte() {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer(myRecer, initialTasks)

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: curretIndex++,
      text: text,
    })
  }
  return (
    <div>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList list={tasks} />
    </div>
  )
})

function AddTask({ handleAddTask }: any) {
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{ border: '1px soild red' }}
        onClick={() => {
          setValue('')
          handleAddTask(value)
        }}
      >
        Add
      </button>
    </div>
  )
}

function TaskList({ list }: any) {
  return (
    <ul>
      {list.map((item: any, index: any) => (
        <li key={item.id}>
          <h3>{item.text}</h3>
          <button>edit</button>
          <button>dlete</button>
        </li>
      ))}
    </ul>
  )
}

function myRecer(state: any, action: any) {
  switch (action.type) {
    case 'added':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]

    default:
      break
  }
}
