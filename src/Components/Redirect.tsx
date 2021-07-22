import React from 'react'
import { useHistory } from "react-router-dom";

export default function Redirect() {
    const history=useHistory();

    
    return (
        <div className="card container" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h1  className="card-title">This is Redirect Page.</h1>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed natus cupiditate eligendi non 
                                         beatae nam quos dolorem ex,laboriosam at earum pariatur temporibus, voluptatibus nostrum
                                         quasi necessitatibus saepe amet illum!</p>
                <button onClick={()=>history.push('/')}>Click to Go back!</button>
            </div>
        </div>
       
    )
}
