
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from '../../../public/Arrow2.svg'
import Alert from '../../../public/alert-circle2.svg'
import Logo from '../../../public/Logo.png'
import Buy2 from '../../../public/cart 2.svg'
import No from '../../../public/No.png'
import Check1 from '../../../public/checkmark.svg'
import HeroSection from '../../components/HeroSection/index'
import { Herr_Von_Muellerhoff } from "next/font/google";

const Navbar = () => {
  return (

    <>
        {/* 1st Navbar */}
     <div>
   <div className="w-[90] ">
   <div className=" whitespace-nowrap w-full h-[203px] ml-[] ">
   <div className=" flex w-full h-[45px] bg-[#272343]"> 
   <p className="flex text-[13px] font-[400] text-[#FFFFFF] pt-[14px] pl-[180px] pr-[127px] pb-[14px]"><Image src={Check1} width={15} height={18} alt='check' className="mr-[4px] pt-1" />Free shipping on all orders over $50 </p>
   <div className=" flex text-[12px]  pt-[14px] pb-[1px] text-[white] gap-[px]">
   <ul className="flex pl-[280px] gap-5">
    <div className="flex">
   <Link href="" className="">Eng</Link>
   <Image src={Vector} width={5} height={5} alt="arrow" className="m-[7px] h-[5px] w-[8px]"/>
   </div>
   <Link href="/FAQ" className="hover:text-[#72bcc3]">Faqs</Link>
   <div className="flex gap-[4px]">
   <Image src={Alert} width={7} height={2} alt="circle" className="h-[15px] w-[15px] mt-[1px]"/>
    <Link href="/NeedHelp" className="pb-3 hover:text-[#72bcc3]">Need Help</Link> 
    </div>
    </ul>
  
         
            </div>
            </div>
        

        {/* 2nd Navbar */}

<div className="whitespace-nowrap w-full h-[65px]  pt-[11px] pb-[20px]  ml-[]  bg-[#F0F2F3] justify-between">
    <div className=" flex gap-1 -mb-5 pl-[170px]">
    <Image src={Logo} width={40} height={40} alt="Logo" className="mb-[12px] ml-[6.62px] mt-1"/>
    <h1 className="text-[#272343] text-[22px] mt-2 font-medium pr-[377px]  ">Comforty</h1>
    <Link href='/Shop' className=" text-center flex w-[110px] h-[44px] pt-[11px] pr-[9px] pl-[7px] ml-[210px] pb-[11px] gap-2 bg-[#FFFFFF] rounded-[8px] hover:text-[#007580]"><Image src={Buy2} width={22} height={22} alt="Buy2"  />cart<p className="w-5 h-5 rounded-full bg-[#007580] text-[11px] text-white pt-[2px] mt-[1px] text-center">2</p></Link>
    </div> 
</div>
     
     {/* 3rd Navbar */}
<div className="pl-[180px] whitespace-nowrap flex w-full drop-shadow-sm h-[51px]  pt-[14px] pb-[14px]   bg-[#FFFFFF] ">
    <ul className="flex gap-[20px] text-[14px] text-[#636270] font-medium">
        <Link href="/Home"  className="hover:text-[#007580]"><li>Home</li></Link>
        <Link href="/Shop" className="hover:text-[#007580]">Shop</Link>
        <Link href="/Products" className="hover:text-[#007580]"><li>Products</li></Link>
        <Link href="/Pages"  className="hover:text-[#007580]"><li>Pages</li></Link>
        <Link href="/About"  className="hover:text-[#007580]"><li>About</li></Link>
    </ul>
    <div className="h-[15px] w-[full] gap-2 pl-[390px] ">
    <ul className="flex  ">
    <li className="text-[14px] text-[#636270] font-normal">Contact:</li>
    <li className="text-[14px] text-[#636270] font-medium">(808) 555-0111</li>
    </ul>
    </div>
</div>

</div>
</div>

{/* Herosection */}

</div>
 
        </>

     
  )
}

export default Navbar;

   

    

{/* //  <Image src={} width={9} height={10} alt="arrow" className="ml-6 mb- -mt-2"/>
// <Image src={} width={7} height={7} alt="circle" className="-ml-4 mt- "/> */}

