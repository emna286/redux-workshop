import React from 'react'
import { useDispatch } from 'react-redux'

function Task(props) {
    const dispatch=useDispatch()
    function change(){
        
        dispatch({
            type:"DONE_ORNOT",payload:props.id
              })   
    }
    function delate(){
        dispatch({
            type:"DELETE_TASK",payload:props.id
              }) 
    }
    function edit(){
    dispatch({
            type:"EDIT_TASK",payload:props.id
              })
            } 
  return (
    <div >
      <span onClick={change}>{props.description}</span>
       <span><button onClick={delate}>X</button></span>
       
       <span><button onClick={edit}>edit</button></span>
    </div>
  )
}

export default Task
