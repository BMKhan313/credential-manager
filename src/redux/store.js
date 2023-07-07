import { configureStore } from '@reduxjs/toolkit'
import  popUpSlice  from './slice/reduxSlice'


export const store = configureStore({
    reducer: {
        // counter: counterSlice,
        credPop: popUpSlice
    },
  })