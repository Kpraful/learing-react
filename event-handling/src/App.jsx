import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [Form, setForm] = useState({"Name":"","Address":""});
  function handleClick (){
    alert("I am clicked");
  }

  function handleChange (e){
    setForm({...Form, [e.target.name]:e.target.value })
  }

  useEffect(() => {
   console.log(Form)
  }, [Form])
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <input type="text" name="Name" value={Form.Name} id="" onChange={handleChange} />
      {Form.Name}
      <input type="text" name="Address" value={Form.Address} id="" onChange={handleChange} />
      {Form.Address}
      <input type="button" value="button" onClick={handleClick} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
