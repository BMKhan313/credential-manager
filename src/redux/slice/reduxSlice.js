"use client"

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    openPop: false
  }

  export const popUpSlice = createSlice({
    name: 'credPop',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      LogoutPopup: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.openPop = action.payload
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount, LogoutPopup } = popUpSlice.actions
  
  export default popUpSlice.reducer