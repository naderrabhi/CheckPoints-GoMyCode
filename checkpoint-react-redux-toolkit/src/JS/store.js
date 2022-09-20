import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from '../features/todoSlice/todoSlice'

const store = configureStore({
  reducer: {
    todoReducer
  },
})

export default store
