"use client"

import { useState } from "react";
import Image from "next/image";
import control from '../assets/control.png'
import User from '../assets/User.png'
import Chart from '../assets/Chart.png'
import { Table,Divider } from 'antd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyIcon from '@mui/icons-material/Key';
import SideBar from "../sideBar/page";
import Link from "next/link";


const createNewCred = () => {
    
 const orgArray = [{org: 10, src: CorporateFareIcon, bg: "#2B8CBE"},{org: 20, src: CorporateFareIcon, bg:"#A6BDDB"},{org: 30, src: CorporateFareIcon, bg:"#ECE7F2"}]
 const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      width: 20
    },
   {
    title: 'Email',
    dataIndex: 'email',
    width: 160
   },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 30,
      render: (text, record) => (
        <span className="flex justify-start">
          <a className="text-[16px] mr-2"><LockResetOutlinedIcon /></a>
          <a className="text-[16px]"><LockOutlinedIcon /></a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      sno: 1,
      email: "user_123"
    },
    {
      key: '2',
      sno: 2,
      email: "user_123"
    },
    {
      key: '3',
      sno: 3,
      email: "user_123"
    },
    {
      key: '4',
      sno: 4,
      email: "user_123"
    }
  ];

  const [open, setOpen] = useState(true);
  const [select, setSelect] = useState(true)

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
        {/* boxes */}
       <div className="mt-8 ml-8">
       <h2 className="font-bold mb-10">Create New Credentials</h2>
       <div className="flex mb-3">
       <h5 >Org Name</h5>
        <input className='rounded-[44px] h-7 p-[3px] ml-2 
              focus:outline-none
             placeholder:text-[#D9D9D9] placeholder:p-[15px]'
                type="text" id="search" name="search" />
       </div>
       <div className="flex">
       <h5>Org Name</h5>
        <input className='rounded-[44px] h-7 p-[3px] ml-2 
              focus:outline-none
             placeholder:text-[#D9D9D9] placeholder:p-[15px]'
                type="text" id="search" name="search" />
       </div>
       <div className="mt-8 w-[60%]">
        <h4 className="font-normal">User To Create</h4>
        <div className="flex flex-col justify-start">
        <FormGroup className="mt-6 ml-[130px]">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Super User" />
      <FormControlLabel control={<Checkbox />} label="Administrator" />
      <FormControlLabel  control={<Checkbox />} label="HR Admin" />
      </FormGroup>
        </div>
        <div className="flex justify-start mt-3 ml-20">
          <Link href="/allpages/credDashboard">
          <Button className="bg-[#F4B63F] text-white rounded-full mr-2 h-7 p-3">Cancel</Button>
          </Link>
       <Link href="/allpages/createdCred">
       <Button className="bg-[#F4B63F] text-white rounded-full h-7 p-3">Create</Button>
       </Link> 
        </div>
       </div>
       </div>
       
      </div>
    </div>
  );
};
export default createNewCred;


// import { Table } from 'antd';



// ReactDOM.render(
//   <Table
//     columns={columns}
//     dataSource={data}
//     bordered
//     title={() => 'Header'}
//     footer={() => 'Footer'}
//   />,
//   mountNode,
// );