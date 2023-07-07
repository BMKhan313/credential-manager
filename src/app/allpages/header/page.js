import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutPopup } from "@/redux/slice/reduxSlice";

const Header = () => {
   
    const mypop = useSelector((state) => state.credPop.openPop)
    const dispatch = useDispatch()  

  return (
    <div className="bg-[#F5F5F5] fixed top-0 w-[80%] right-0">
    <div className="h-[50px] flex justify-end items-center mr-2">
      <div>
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          className="w-7 h-7 rounded-full cursor-pointer "
          alt="Avatar"
          onClick={()=>dispatch(LogoutPopup(true))}
          
        />
      </div>
      <p className="font-medium p-2" onClick={console.log("my pop",mypop)}>Baaz Muhammad</p>
    </div>
  </div>
  )
}

export default Header