import {createStore}from 'redux'

const taskObject={listTask:[],edit:""}

function listReducer (state=taskObject,action){
     
    if(action.type==="ADD_TASK"){
     if(state.edit){
        const newlist=state.listTask.map(el=>{
            if(el.id===state.edit) return {...el,description:action.payload}
            return el
        })
        return {listTask:newlist,edit:""}
     }


    const newlist=[...state.listTask,{id:crypto.randomUUID(),description:action.payload,isDone:false}]
    
    return {...state,listTask:newlist}
}
    if(action.type==="DONE_ORNOT"){

  const newlist =state.listTask.map(element=>{
        if (element.id==action.payload)
        return(
            {...element,isDone:!element.isDone}
            
        )
        else 
        return element   
    })  
return{...state,listTask:newlist} }
    if(action.type==="DELETE_TASK"){
   const newlist=state.listTask.filter(element=>element.id!==action.payload)
return {...state,listTask:newlist}
}

   if(action.type==="EDIT_TASK")
return  {...state,edit:action.payload}




    return(
        state
    )
}


const magasin= createStore(listReducer)
export default magasin