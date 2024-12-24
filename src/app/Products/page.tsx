import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logo1 from '../../../public/Logo1.jpg'
import Logo2 from '../../../public/Logo2.jpg'
import Logo3 from '../../../public/Logo3.jpg'
import Logo4 from '../../../public/Logo4.jpg'
import Logo6 from '../../../public/Logo6.jpg'
import Logo7 from '../../../public/Logo7.jpg'
import Addcart from '../../../public/cart 2.svg'
import img2 from '../../../public/img2.jpg'
import img3 from '../../../public/img3.jpg'
import img4 from '../../../public/img4.png'
import Footer from '../../components/Footer/index'


const page = () => {
  return (
    <>
     {/* 6 Herosection   */}
    
     <Navbar />
             
     <div className=" w-[full]  h-[900px] ml-[180px] mr-[190px] mt-[px] drop-shadow-sm">

     <h1 className="text-[#272343] text-[22px] font-semibold mb-5 text-left">All Products</h1>
     <div className="flex gap-3">
   <div>
   <Image src={Logo1} width={312} height={312} alt="1" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className=" absolute w-[30px]  h-[16px] text-center top-[78px] left-[4px] text-white text-[10px] rounded-[3px] bg-[#01AD5A] ">New</span>

   </div>

   <div>
   <Image src={Logo2} width={312} height={312} alt="2" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className=" absolute w-[30px]  h-[16px] text-center top-[78px] left-[218px] text-white text-[10px] rounded-[3px] bg-[#F5813F]">Sales</span>
   </div>

   <Image src={Logo3} width={312} height={312} alt="3" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <Image src={Logo4} width={312} height={312} alt="4" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   
   </div>
    {/* main div */}
   <div className="flex  mt-2">

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal text-[black] hover:text-[#007580] gap-3 ">
   <p >Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal text-[black] hover:text-[#007580] ml-4 ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20<del className="text-[8px] text-[#9A9CAA] font-medium  ">$30</del></span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   
   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580]  ml-4">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580] ml-4 ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   </div>
   
   

   <div className="flex gap-3 -mt-5 ">
     <div>
   <Image src={img3} width={312} height={312} alt="5" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className=" absolute w-[30px]  h-[16px] text-center top-[344px] left-[4px] text-white text-[10px] rounded-[3px] bg-[#01AD5A] ">New</span>
     </div>
     <div>
   <Image src={Logo6} width={312} height={312} alt="6" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className="absolute w-[30px]  h-[16px] text-center top-[343px] left-[218px] text-white text-[10px] rounded-[3px] bg-[#F5813F]">Sales</span>
   </div>
   <Image src={Logo7} width={312} height={312} alt="7" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <Image src={Logo1} width={312} height={312} alt="1" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   </div>

   <div className="flex  mt-2  ">

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580]  ">
   <p> Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   
   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580] ml-[2px] ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20<del className="text-[8px] text-[#9A9CAA] font-medium ml-1">$30</del></span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[167px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580]  pl-[4px]">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[167px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580] pl-[5px] ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[168px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   
   </div>
   </div>

   <div className="flex gap-3">
   <div>
   <Image src={img2} width={312} height={312} alt="1" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className=" absolute w-[30px]  h-[16px] text-center top-[627px] left-[4px] text-white text-[10px] rounded-[3px] bg-[#01AD5A] ">New</span>

   </div>

   <div>
   <Image src={Logo2} width={312} height={312} alt="2" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <span className=" absolute w-[30px]  h-[16px] text-center top-[627px] left-[218px] text-white text-[10px] rounded-[3px] bg-[#F5813F]">Sales</span>
   </div>

   <Image src={Logo3} width={312} height={312} alt="3" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   <Image src={img4} width={312} height={312} alt="4" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
   
   </div>
    {/* main div */}
   <div className="flex  mt-2">

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal text-[black] hover:text-[#007580] gap-3 ">
   <p >Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal text-[black] hover:text-[#007580] ml-4 ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20<del className="text-[8px] text-[#9A9CAA] font-medium  ">$30</del></span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   
   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580]  ml-4">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>

   <div  className=" w-[256px] h-[51px] text-[11px] font-normal hover:text-[#007580] ml-4 ">
   <p>Library Stool Chair</p>
   <span className="font-semibold text-[10px] text-[#272343]">$20</span>
   <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[165px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
   <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
   </p>
   </div>
   </div>
   
    

    <div className='w-full h-[430px] bg-[#1E28320D] mt-10  '>
    <h1 className="text-[#272343] text-[25px] font-semibold mb-5 pt-9 text-center ">Or Subscribe To The Newsletter</h1>
     
    <input className="w-[45%] text-[11px] ml-[205px]  h-7 text-[#9A9CAA] border-b" type="email" id="email" placeholder="&nbsp;&nbsp;Email Address..." required/>
    <button className="w-[70px] h-[30px]   ml-[7px] mt-[10px] rounded-[5px] text-center text-[11px] text-black hover:bg-black hover:text-white">SUBMIT</button>
    <h1 className="text-[#272343] text-[25px] font-semibold mb-5 pt-9 text-center ">Follow Products And Discounts On Instagram</h1>

     <div className='flex gap-2 ml-3 mr-3'>
     <Image src={img3} width={212} height={212} alt="3" className="h-[135px] w-[135px] rounded-md "></Image>
     <Image src={img2} width={212} height={212} alt="2" className="h-[135px] w-[135px] rounded-md "></Image>
     <Image src={Logo2} width={212} height={212} alt="4" className="h-[135px] w-[135px] rounded-md "></Image>
     <Image src={Logo1} width={212} height={212} alt="1" className="h-[135px] w-[135px]  rounded-md "></Image>
     <Image src={Logo3} width={212} height={212} alt="4" className="h-[135px] w-[135px] rounded-md "></Image>
     <Image src={img4} width={212} height={212} alt="4" className="h-[135px] w-[135px] rounded-md "></Image>
        </div> 
         
    </div>
     
    
    </div>
        <div className='mt-[450px]'><Footer /></div>
      
       
       
       </>
      
      
  )
}

export default page