import React from 'react'

export default function Alert(props) {
  // this is for making first letter of succes capital then lower letter
  const capital=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
  // this is how alert will print by using in the app.js or navabar 
  return (
    props.alert &&<div>
      <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
         <strong>  {capital(props.alert.ty)} </strong>:{props.alert.msg}
       
      </div>
    </div>
  )
}
