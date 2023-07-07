"use client"
import React,{useState} from 'react'
import { NavLinks } from "@/app/constants/page";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import control from '../assets/control.png'
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from "next/navigation";

const SideBar = () => {
  const params = useParams()
  // console.log('params in sidebar',params )

  const router = useRouter();
  // console.log('router',router)
  const { asPath } = router;
  // console.log('aspath',asPath)

  const [open, setOpen] = useState(true);
  return (
    <div
        className={` ${open ? "w-[72]" : "w-[20]"} bg-[#ffffff] h-[100vh] p-5 relative pt-8 duration-200 `}
      >
        <Image
          src={control}
          width={20}
          height={20}
          alt="Picture of keyscarrying"
          className={`absolute cursor-pointer -right-3 top-[20rem] w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        {/* <div className="flex gap-x-4 items-center">
          <Image
            src={User}
            width={20}
            height={20}
            className={`cursor-pointer duration-700 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-black origin-left font-medium  text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Designer
          </h1>
          
        </div> */}
        <ul className="pt-40">
          {NavLinks.map((navlink, index) => (
           <div 
           key={navlink.id} >
            <Link 
             href={`/${navlink.link}`}
             // onClick={index}
             className={`flex  rounded-[40px] p-[6px] pl-3 pr-3 cursor-pointer items-center gap-x-3 
             ${
               asPath === `/${navlink.link}` ? "bg-[#EFEFEF]" : ""
              }
             ${index===0 ? "bg-[#EFEFEF]" : ""}
              `}
             >
              <Image
                src={navlink.src}
                width={35}
                height={35}
                alt="control"
                key={navlink.src} 
              />
              <span className={`${!open && "hidden"} origin-left duration-200 text-[12px]`} key={navlink.title} >
                {navlink.title}
              </span>
            </Link>
           </div>
            
          ))}
        </ul>
      </div>
  )
}

export default SideBar