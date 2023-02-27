import React from 'react'

export default function Plan(props) {
  
  return (<>
   <div className="container">
    <div className="row  m-1 text-capitalize">
      <div className="col-3">
    <li>{props.value}</li>
      </div>
      <div className="col-3">
        <button className='btn btn-danger' onClick={()=>{props.del(props.id)}}>X</button>
      </div>
    </div>
   </div>
   </>
  )
}
