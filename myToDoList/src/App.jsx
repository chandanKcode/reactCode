import { useState } from "react"
import './Style.css'

export default function App()
{
  const [newItem,setNewItem]=useState("")
  const [toDos,setToDos]=useState([])

function handleSubmit(e){
  e.preventDefault()

  const newItemG={id:crypto.randomUUID(),newItem:newItem,completed:false}
    if(newItem)
    {
      setToDos([...toDos,newItemG])
      setNewItem("");
    }
  // setToDos([...toDos,{id:crypto.randomUUID,newItem:newItem,completed:false},]);
  // // setToDos(currentToDos =>{
  // //  return [...toDos,{id:crypto.randomUUID,newItem:newItem,completed:false},]
  // // });
  // setNewItem("");
}
function toDoToggle(id,completed)
{
  setToDos(currentToDos=>{   
     return  currentToDos.map(toDo=>{
      if(toDo.id==id) {
        return {...toDo,completed}
      }
     })
     })
}
function  toDoDelete(id){
setToDos(currentToDo=>{
  return currentToDo.filter(toDo =>toDo.id!=id)
  }
  )
// const newToDo=[toDos.filter(toDo=>toDo.id!=id)]
// setToDos(newToDo)
}
  return (
    <div>
      <h1>
    Add Numbers to List
    </h1>
  <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
    <label htmlfor="item" className="lbl">New Item</label>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <div className="form-row">
       <button className='btn' >Add</button>
    </div>
    </form>
    <ul className='list'>
      {toDos.map(toDo => {
        return (
      <li  key={toDo.id}>
                <input type="checkbox" className='chkBox' checked={toDo.completed} onChange={e => toDoToggle(toDo.id,e.target.checked)}/>
        <label className='lbl'>{toDo.newItem}</label>
        <button className='btn-small' onClick={() =>toDoDelete(toDo.id)}> Delete</button>
      </li>
       )
       })
      }    
    </ul>
</div>
  )
}
