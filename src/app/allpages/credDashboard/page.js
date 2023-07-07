"use client"

import { useState } from "react";
import { Table,Divider } from 'antd';
import cs from './cred.module.css'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { NavLinks } from "@/app/constants/page";
import SideBar from "../sideBar/page";
import { useParams } from "next/navigation";
import ShowPasswordPop from "./showPasswordPopup";
import Header from "../header/page";
import { Dropdown, Space } from 'antd';
import { LogoutPopup } from "@/redux/slice/reduxSlice";
import { render } from "react-dom";

const CredDashboard = () => {

  const [open, setOpen] = useState(true);
  const [openPop, setOpenPop] = useState(false);
  const [select, setSelect] = useState(true)
  const [showEntries, setShowEntries] = useState(8) 
  
  // const count = useSelector((state) => state.counter.value)
  const store = useSelector((state) => state.credPop)
 console.log('store', store)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()  
  
  const orgArray = [{org: 10, src: CorporateFareIcon, bg: "#2B8CBE"},{org: 20, src: CorporateFareIcon, bg:"#A6BDDB"},{org: 30, src: CorporateFareIcon, bg:"#ECE7F2"}]
 
 const onClick = ({ key }) => {
  
  setShowEntries(key)
  console.log(showEntries)
};

 const items = [
  
  {
    label: 8,
    key: '8',
  },
  {
    label: 12,
    key: '12',

  },
  {
    label: 21,
    key: '21',
  },
  {
    label: 34,
    key: '34',
  },
  {
    label: 55,
    key: '55',
  },
  {
    label: 89,
    key: '89',
  },
];
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
      title: "Type",
      dataIndex: 'type'
    },
    {
      title: "Password",
      dataIndex: 'password',
      key: 'action',
      fixed: 'right',
      width: 120,
      render: (text, record) => (
        <span className="flex justify-center">
          <a className="" 
           ><ShowPasswordPop /> </a>
        </span>
      )
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 80,
      render: (text, record) => (
        <span className="flex justify-center">
          <a className="text-[16px]" ><EditRoundedIcon /></a>
        </span>
      ),
    },
  ];

  const data = [
    {
      "id": 1,
      "sno": 1,
      "type": "admin",
      "email": "ihsaan@gmail.com",
      "password": "$2y$10$mumu86ot.lNCb24AkWO5cuLC4nYsiJe8/mu.T7obJubnMq2717z1G",
      "orgcode": "test-01",
      "orgname": "test"
  },
  {
      "id": 2,
      "sno": 2,
      "type": "hradmin",
      "email": "recBot@demo.com",
      "password": "$2y$10$SNJhKowHXIL3ZzoMo5Y4HO619T/jXm/tsRhBHK3g2rY78mWj0G3Ke",
      "orgcode": "bot-101",
      "orgname": "botnostic"
  },
  {
      "id": 3,
      "sno": 3,
      "type": "admin",
      "email": "test@test.com",
      "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
      "orgcode": "bot-101",
      "orgname": "botnostic"
  },
  {
    "id": 4,
    "sno": 4,
    "type": "admin",
    "email": "ihsaan@gmail.com",
    "password": "$2y$10$mumu86ot.lNCb24AkWO5cuLC4nYsiJe8/mu.T7obJubnMq2717z1G",
    "orgcode": "test-01",
    "orgname": "test"
},
{
    "id": 5,
    "sno": 5,
    "type": "hradmin",
    "email": "recBot@demo.com",
    "password": "$2y$10$SNJhKowHXIL3ZzoMo5Y4HO619T/jXm/tsRhBHK3g2rY78mWj0G3Ke",
    "orgcode": "bot-101",
    "orgname": "botnostic"
},
{
    "id": 6,
    "sno": 6,
    "type": "admin",
    "email": "test@test.com",
    "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
    "orgcode": "bot-101",
    "orgname": "botnostic"
},
{
  "id": 7,
  "sno": 7,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},
{
  "id": 8,
  "sno": 8,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},
{
  "id": 9,
  "sno": 9,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},
{
  "id": 10,
  "sno": 10,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},
{
  "id": 11,
  "sno": 11,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},
{
  "id": 12,
  "sno": 12,
  "type": "admin",
  "email": "test@test.com",
  "password": "$2y$10$RweojTKFnxTifUoKG5mfUeaoVHQCMSfJS0bQmn4/CFTijXYHZEStO",
  "orgcode": "bot-101",
  "orgname": "botnostic"
},

  ];
 

  return (
  
    <div className="flex">
    <SideBar />
    <div className="h-screen flex-1 justify-start overflow-y-scroll">
      <div className="bg-[#F5F5F5]">
        <div className="h-[50px] flex justify-end items-center mr-2" onClick={()=>dispatch(LogoutPopup(true))}>
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

      <div className="flex p-[18px]">
         { orgArray.map((box,index)=>(
          <div key={index} className={`flex flex-col justify-center items-center bg-[${box.bg}] w-[31%] h-[160px]  mr-2 shadow-lg`}>
          
            <CorporateFareIcon className="text-[80px] text-white" />
            <p className="font-poppins text-white font-semibold">{box.org} +</p>
           </div>
         )) 
          }
        </div>
       <div className="flex justify-between w-[93%] items-center p-2">
       <div className="flex p-[6px] font-poppins ml-3">
          <h3 className="font-poppins mr-1">Show</h3>
          <p className="bg-slate-700 w-7 h-5 text-[#efefef] text-center">{showEntries}</p>
          <Dropdown
    menu={{
      items,
      onClick,
      selectable: true
    }}
    
    trigger={['click']}
    className="-mt-[3px]"
  >
    <a onClick={(e)=>e.preventDefault()}>
      <Space>
      <ArrowDropDownIcon className="text-white bg-[#F4B63F] h-5 mr-2" />
      </Space>
    </a>
  </Dropdown>
          {/* <ArrowDropDownIcon className="text-white bg-[#F4B63F] h-5 mr-2"/> */}
          <h3 className="font-poppins">Entries</h3>
        </div>
      <Link href="/allpages/createNewCred">
      <Button className="bg-[#F4B63F] text-white rounded-[40px] p-3 h-3 font-poppins font-bold text-[12px]">Create New Credentials</Button>
      </Link> 
       </div>
       <div className={`flex items-center ml-5 mt-2 w-[90%] `}>
       <div className="flex">
           <h5>Org Code</h5>
           <input className='rounded-[44px] h-7 w-[60%] p-[3px] ml-1 focus:outline-none' type="text" id="search_for_code" name="search_for_code" />
          </div>
          <div className="flex">
           <h5>Org Name</h5>
           <input className='rounded-[44px] h-7 w-[60%] p-[3px] ml-1 focus:outline-none' type="text" id="search_for_name" name="search_for_name" />
          </div>
          <div className="flex">
          <h5 className="font-poppins">User ID</h5>
          <input className='rounded-[44px] h-7 w-[60%] p-[3px] ml-1 focus:outline-none' type="text" id="search_for_id" name="search_for_id" />
          </div>
        
       <Button className="bg-[#f4b63f] text-white rounded-[44px] h-3 p-3 font-semibold self-center hover:bg-none">Search</Button>
       </div>
        <div className="font-poppins font-normal w-[92%] ml-4 mt-4">
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: 500, y:400  }}
            pagination={{
              // showSizeChanger: showEntries,
              // pageSizeOptions: ["3", "6", "9", "12"],
              defaultPageSize: 8,
              showTotal: () => `Total records: ${12}`,
              total: 12,
              pageSize: showEntries,
              // position: ["bottomLeft"],
              // showQuickJumper: true,
            }}
          />
        </div>
    
        {/* boxes */}
       
      </div>
 </div>
   
   
  );
};
export default CredDashboard;

