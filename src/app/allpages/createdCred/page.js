"use client"

import { useState } from "react";
import Image from "next/image";
import control from '../assets/control.png'
import User from '../assets/User.png'
import Chart from '../assets/Chart.png'
import { Table,Divider } from 'antd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "@mui/material";
import Popup from "./popup";
import PasswordPopup from "./passwordPopup";
import SideBar from "../sideBar/page";

const CreatedCred = () => {
 const orgArray = [{org: 10, src: CorporateFareIcon, bg: "#2B8CBE"},{org: 20, src: CorporateFareIcon, bg:"#A6BDDB"},{org: 30, src: CorporateFareIcon, bg:"#ECE7F2"}]
 const columns = [
    {
      title: '#',
      dataIndex: 'sno',
      width: 60
    },
    {
      title: 'Org Code',
      dataIndex: 'orgcode',
    },
    {
      title: 'Org Name',
      dataIndex: 'orgname',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Super User',
      dataIndex: 'superuser',
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
    },
    {
      title: 'Hr Admin',
      dataIndex: 'hradmin',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 80,
      render: (text, record) => (
        <span className="flex justify-center">
          <a className="text-[16px]"><EditRoundedIcon /></a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      sno: 1,
      orgname: 'John Brown',
      orgcode: 'org_123',
      superuser: 'super@gmail.com',
      admin: 'admin@gmail.com',
      hradmin: 'hradmin@gmail.com'
    },
    
  ];

  const [open, setOpen] = useState(true);
  const [openPop, setOpenPop] = useState(false);
  const [openPopPass, setOpenPopPass] = useState(false);
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
       
        <div className="font-poppins font-normal w-[92%] ml-6 mt-6">
        <h2 className="mb-5 font-poppins font-semibold">Successfully Created New Credentials</h2>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: 500 }}
          />
          <div className="flex justify-end mt-2">
            {/* <Button 
            className="bg-[#F4B63F] h-5 p-3 rounded-full text-white font-poppins mr-1" 
            onClick={()=>setOpenPop(openPop)}
            >Send Via Email</Button> */}
            <Popup  
            onClick={()=>setOpenPop(openPop)}
            openPop={openPop} setOpenPop={setOpenPop} />
            <PasswordPopup 
            onClick={()=>setOpenPopPass(openPopPass)}
            openPopPass={openPopPass} setOpenPopPass={setOpenPopPass} 
            />
            {/* <Button className="bg-[#F4B63F] h-5 p-3 rounded-full font-poppins text-white">Show Password</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatedCred;

