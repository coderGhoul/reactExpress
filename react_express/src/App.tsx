import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LearnProps from './learn/props/LearnProps'
import Card from './learn/props/Card'
import LearnIf from './learn/LearnIF/LearnIf'
import Learnul from './learn/learnUl/Learnul'
import ClickEvent from './learn/响应系统/clickEvent'
import LearnState from './learn/响应系统/LearnState'
import Snapshot from './learn/响应系统/Snapshot'
import UpdateQ from './learn/响应系统/UpdateQ'
import Obj from './learn/响应系统/Obj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Card>
        <LearnProps
          person={{
            src: 'https://images.unsplash.com/photo-1565863097554-5febbdd412c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUU1JUE0JUI0JUU1JTgzJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: '小女孩',
            title: '小女孩',
          }}
        />
      </Card> */}
      {/* <LearnIf /> */}
      {/* <Learnul /> */}
      {/* <ClickEvent /> */}
      {/* <LearnState /> */}
      {/* <Snapshot /> */}
      {/* <UpdateQ /> */}
      <Obj />
    </div>
  )
}

export default App
