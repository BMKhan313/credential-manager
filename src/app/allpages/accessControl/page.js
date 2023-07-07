"use client"

import { useState } from "react";
import { Table,Divider } from 'antd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "@mui/material";
import SideBar from "../sideBar/page";
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const AccessControl = () => {
 const orgArray = [{org: 10, src: CorporateFareIcon, bg: "#2B8CBE"},{org: 20, src: CorporateFareIcon, bg:"#A6BDDB"},{org: 30, src: CorporateFareIcon, bg:"#ECE7F2"}]
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      width: 20
    },
   {
    title: 'Email',
    dataIndex: 'email',
    width: 150
   },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 30,
      render: (text, record) => (
        <span className="flex justify-start">
          <Tooltip title="Reset Password">
      <IconButton>
      <Link href="/allpages/resetPassword"  className="text-[16px] mr-2 ">
        <LockResetOutlinedIcon />
        </Link> 
      </IconButton>
    </Tooltip>
    <Tooltip title="Revoke Access">
      <IconButton>
      <Link href="/allpages/resetPassword"  className="text-[16px] mr-2 ">
      <LockOutlinedIcon />
        </Link> 
      </IconButton>
    </Tooltip>
      
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
    },
    {
      key: '5',
      sno: 5,
      email: "user_123"
    },
    {
      key: '6',
      sno: 6,
      email: "user_123"
    },
    {
      key: '7',
      sno: 7,
      email: "user_123"
    },
    {
      key: '8',
      sno: 8,
      email: "user_123"
    },
    {
      key: '9',
      sno: 9,
      email: "user_123"
    },
    {
      key: '10',
      sno: 10,
      email: "user_123"
    },
    {
      key: '11',
      sno: 11,
      email: "user_123"
    },
    {
      key: '12',
      sno: 12,
      email: "user_123"
    }
  ];

  const [open, setOpen] = useState(true);
  const [select, setSelect] = useState(true)

  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 justify-start overflow-y-scroll">
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
        <div className="flex p-[18px]">
         { orgArray.map((box,index)=>(
          <div key={index} className={`flex flex-col justify-center items-center bg-[${box.bg}] w-[31%] h-[160px]  mr-2 shadow-lg`}>
            {/* <Image 
            src={<CorporateFareIcon />}
            width={40}
            height={40}
            alt="org"
            /> */}
            <CorporateFareIcon className="text-[80px] text-white"/>
            <p className="font-poppins text-white font-semibold">{box.org} +</p>
           </div>
         ))
           
          }
          {/* <div className="bg-[#A6BDDB] w-[31%] h-[160px] mr-2 shadow-lg">2</div>
          <div className="bg-[#ECE7F2] w-[31%] h-[160px]  shadow-lg">3</div> */}
        </div>
       <div className="flex justify-between w-[93%] items-center p-2">
       <div className="flex p-[6px] font-poppins ml-3">
          <h3 className="font-poppins mr-1">Show</h3>
          <p className="bg-slate-700 w-7 h-5 text-[#efefef] text-center">4</p>
          <ArrowDropDownIcon className="text-white bg-[#F4B63F] h-5 mr-2"/>
          <h3 className="font-poppins">Entries</h3>
        </div>
       <div>
        Search 
        <input className='rounded-[44px] h-7 p-[3px] ml-2 
              focus:outline-none
             placeholder:text-[#D9D9D9] placeholder:p-[15px] placeholder:text-start'
                type="text" id="search" name="search" placeholder='Enter Text' />
       </div>
       <Link href="/allpages/inviteUser">
       <Button className="bg-[#F4B63F] text-white rounded-[40px] p-3 h-3 font-poppins font-normal text-[12px]">Invite User</Button>
       </Link>
       </div>
        <div className="font-poppins font-normal w-[92%] ml-3 mt-3">
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ y:200 }}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ["3", "6", "9", "12"],
              defaultPageSize: 6,
              showTotal: () => `Total records: ${12}`,
              total: 12,
              // position: ["bottomLeft"],
              showQuickJumper: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default AccessControl;


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