import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks
import { increment } from './redux/Counter/counterSlice';  // Import increment action
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const dispatch = useDispatch();  // Initialize dispatch to dispatch actions
  const count = useSelector((state) => state.counter.value);  // Get counter value from Redux store



  return (
    <>
      <Navbar/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
