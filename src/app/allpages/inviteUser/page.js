"use client"

import { useState } from "react";
import Image from "next/image";
import control from '../assets/control.png'
import User from '../assets/User.png'
import Chart from '../assets/Chart.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import SideBar from "../sideBar/page";
import Link from "next/link";

const InviteUser = () => {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Credential Manager", src: User },
    { title: "Access Control", src: Chart },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 justify-start">
        <div className="bg-[#F5F5F5]">
          <div className="h-[50px] flex justify-end items-center mr-2">
            <div>
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-7 h-7 rounded-full cursor-pointer "
                alt="Avatar"
              />
            </div>
            <p className="font-medium p-2">Baaz Muhammad</p>
          </div>
        </div>
        <div className="mt-5 ml-7">
          <h1 className="font-bold font-poppins">Invite User</h1>
          <div className="flex mt-10 items-center">
            <h5 className="font-poppins">Username/ ID</h5>
            <input className='bg-[#F5F5F5] h-7 p-3 ml-2 rounded-[2px]
              focus:outline-none
              border-black
              placeholder:p-[15px]'
              type="text" id="username" name="username" placeholder="Username" />
          </div>
          <p className="font-normal ml-[7.5rem] mt-3 w-[70%]">Note: A verification email will be sent to this email. User will be able to create a
            passwordby themself after verification. The user will not able
            to invite additional users.</p>

          <div className="flex mt-2" >
            <h5 className="font-poppins mt-2">Password</h5>
            <FormControl >

              <div className="ml-10">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="self"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="self" control={<Radio />} label="self service after verification" />
                  <FormControlLabel value="Create Initial Password" control={<Radio />} label="Create Initial Password" />
                </RadioGroup>
              </div>

            </FormControl>

          </div>
          <div className="flex flex-col ml-[7.5rem] mt-4" >
            <div className="flex items-center mb-2">
              <h4>Initial password</h4>
              <input className='bg-[#F5F5F5] h-7 p-3 ml-7 rounded-[2px]
              focus:outline-none
              border-black
              placeholder:p-[6px]'
                type="text" id="Initial Password" name="Initial Password" placeholder="Initial Password" />
            </div>
            <div className="flex">
              <h4>confirm password</h4>
              <input className='bg-[#F5F5F5] h-7 p-3 ml-2 rounded-[2px]
              focus:outline-none
              border-black
              placeholder:p-[6px]'
                type="text" id="Confirm Password" name="Confirm Password" placeholder="Confirm Password" />
            </div>

          </div>
          <div className="flex ml-[21.5rem] mt-5">
            <Link href="/allpages/accessControl">
            <Button className="bg-[#F4B63F] text-white rounded-full mr-2 h-7 p-3">Cancel</Button></Link>
            <Link href="/allpages/accessControl">
            <Button className="bg-[#F4B63F] text-white rounded-full mr-2 h-7 p-3">Save</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InviteUser;