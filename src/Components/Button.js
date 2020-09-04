import React from 'react';


const Button = (props)=> {
  return(
    <div>
      <button className={props.className}><p>{props.title}</p></button>
    </div>
  )
}

export default Button;
