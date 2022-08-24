import React, { useState } from 'react';

export default function Alert(props) {
  return (
    //we have used "props.alert &&" here because javascript will first evaluate 
    //props.alert and if its null teh alert component wont get rendered
    //and thats what we want when the value of alert.props is null
    props.alert && 
    <>
    <div className="alert alert-success" role="alert">
  <strong>{props.alert}</strong>
</div></>
  )
}
