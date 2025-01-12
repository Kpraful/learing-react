import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './Counter/Counterslice'

export default configureStore({
    reducer: { counter: counterReducer },  // 'counter' is the key
  });
  