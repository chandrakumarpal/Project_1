import React from 'react'
import { useState } from 'react'
import './Todo.css'
export default function Todo(){
    const [text,settext] =useState("");
    const [data,setdata]=useState([]);
   function add(item){
        setdata((data)=>{
       
            var update= [...data,text];
            console.log(update);
           settext("");
            return update;
        
         
        });
      }
      function del(i){
        const after=data.filter((data,key)=>{
            return i!==key;
          
          });
          setdata(after);
          
      }
    return(
 
   
        <>
        <div className="main">
        <div className="todo">
        <h1 className='head'>Todo List</h1>
        
        <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}} />
      <button onClick={(item)=>{add(item)}}>Add Item</button>  
       
      <div className="view">
      {data.map((value,id)=>{
        return(
            <>
           <h5 className='val' key={id} >{value}<button className='butt' onClick={()=>{del(id)}}>X</button></h5>

            </>
        )
      })}
    
       </div>
        </div>
        </div>
        </>
    )
}