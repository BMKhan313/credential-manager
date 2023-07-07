"use client"
import { Provider } from "react-redux";
import { store } from "./store";
// import {reduxSlice} from "./slice/reduxSlice";

export function Providers({children}){
    return(
        <Provider store={store}>
         {children}
        </Provider>
    )
}