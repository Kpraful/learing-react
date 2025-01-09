import React from 'react'
import { memo } from 'react';


function Navbar(props) {
    console.log("another");
    return (

    <div>{props.getValue()}</div>
  )
}

export default memo(Navbar);