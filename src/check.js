import React from 'react'
import { useState } from 'react'
import './App.css'
export default function App() {

const [item,setitem]=useState('');
const [list,setlist]=useState([]);
function add(){
setlist((list)=>{
  const up=[...list,item];
  console.log(up);
  setitem('');
  return up;

});


}
function remove(i){
const after=list.filter((lista,id)=>{
  return i!==id;

});
setlist(after);

}

  return (
    <>
    <div className="container shadow-lg">
    <h1 className='text-center my-5'>Todo list</h1>
    <div className="row">
    <div className="col-2"></div>
    <div className="col-6">
    <div className="row in">
    <div className="col-9 ">
    <input type='text' placeholder="Enter your item here" value={item} onChange={(e)=>setitem(e.target.value)} />
    </div>
    <div className="col-3">
    <span><button onClick={add}>Add Item</button></span>
  
    </div>
    <h3>your list are here</h3>
    {list!==0 && list.map((lista,id)=>{
      return(
        <>
        <h3  key={id}>
      {lista}
      
      <button className='a' onClick={()=>remove(id)}>X</button></h3>
        </>
      )
    }
    )}
    </div>
    
    </div>
    
    </div>
    
    
    </div>
    </>
  )
}
