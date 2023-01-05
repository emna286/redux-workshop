import React, { useRef } from 'react'
import {useDispatch, useSelector}from 'react-redux'
function Addtask() 
{
  const inputRef=useRef()
const dispatch=useDispatch()
const state=useSelector(state=>state)
if(state.edit){
  const description=state.listTask.find(el=>el.id===state.edit).description
 
 inputRef.current.value=description
}

function addedtolist()
{
  dispatch({
type:"ADD_TASK",payload:inputRef.current.value
  })

  inputRef.current.value=""
}
  return (
    <div>
      <input type="text" ref={inputRef} />
    <button onClick={addedtolist}>add</button>

    </div>
  )

}

export default Addtask



