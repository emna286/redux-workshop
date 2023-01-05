import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Addtask from './Addtask'
import Listask from './Listask'
import Task from './Task'
import { useSelector } from 'react-redux'

function App() {
const list=useSelector(state=>state.listTask)

  return (
    <div className="App">
    <Addtask />
   <Listask >
 
{list.map(element=><Task key={element.id} id={element.id} description ={element.description} isDone={element.isDone}/>)}
  
   </Listask>

  
      </div>
      
  )
}

export default App
