import React, { memo, useReducer, useState } from 'react'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
]
export default memo(function Templacte() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
  function handleraddTasks(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }
  return (
    <div>
      <InputOftask handleraddTasks={handleraddTasks} />
      <TastList tasks={tasks} />
    </div>
  )
})

function TastList({ tasks }: any) {
  return (
    <ul>
      {tasks.map((item: any, index: any) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <button>change</button>
          <button>delele</button>
        </li>
      ))}
    </ul>
  )
}

function InputOftask({ handleraddTasks }: any) {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="please a new todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setInputValue('')
          handleraddTasks(inputValue)
        }}
      >
        Add
      </button>
    </div>
  )
}

function taskReducer(state: any, action: any) {
  switch (action.type) {
    case 'added':
      return [...state, { id: action.id, text: action.text, done: false }]
    default:
      return
  }
}
