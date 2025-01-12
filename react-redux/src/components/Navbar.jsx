import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Navbar() {
    const counter = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.counter.name);
  return (
    <div>Navbar {counter} {name}</div>
  )
}

export default Navbar