import { useContext } from 'react'
import { CounterContext } from '../context/context'

function Component1() {
    const context = useContext(CounterContext);
    const [count, setCount] = context;
  return (
    <div>
        Component
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default Component1