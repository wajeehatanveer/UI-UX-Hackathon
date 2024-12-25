import Navbar from '@/components/Navbar'
import Footer from '../../components/Footer/index'
import React from 'react'
import Image from 'next/image'
import Address from '../../../public/Address.svg'
import Phone from '../../../public/Phone.svg'
import Time from '../../../public/Time.svg'
import Group from '../../../public/Group.svg'
import Group1 from '../../../public/Group 1.svg'
import Group2 from '../../../public/Group2.svg'







const page = () => {
  return (
    <>
     <Navbar /> 
     <div className='ml-[280px] mr-[280px]'>
      
     <div className='w-full h-[600px]'>

     <h1 className="text-[#272343] text-[22px] font-bold  text-center">Get In Touch With Us </h1>
     <p className='text-[#9F9F9F]  w-[450px] ml-[130px] h-[50px] font-normal text-center text-[12px]   mt-3 '>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    
     <div className='flex ml-[60px] mt-10 '>
      <Image src={Address} width={15} height={15} alt="icon1" className='-mt-[59px]'   />
      <div className='flex'>
      <div className=" bg-[yell] w-[150px] ml-[20px] ">
     <h1 className="text-[#000000] text-[15px] font-medium ">Address</h1>
     <p className='text-[#000000]  h-[60px] font-normal text text-[11px]   mt-3- '>236 5th SE Avenue, New York NY10000, United States</p>
     </div>

      <div className='ml-28'>
     <label className='font-semibold text-[12px] ' >Your name</label> <br />
     <input type="name" id="name" placeholder="&nbsp;&nbsp;Abc" required className='rounded-md h-[40px] text-[11px] w-[250px] border-2 border-[#9F9F9F] text-[#9F9F9F] mt-3' />
     </div>
     </div>
     </div>


     <div className='flex ml-[60px] mt-10 '>
      <Image src={Phone} width={15} height={15} alt="icon1" className='-mt-[59px]'   />
      <div className='flex'>
      <div className=" bg-[yell] w-[150px] ml-[20px] ">
     <h1 className="text-[#000000] text-[15px] font-medium ">Phone</h1>
     <p className='text-[#000000]  h-[60px] font-normal text text-[11px]   mt-3- '>Mobile: +(84) 546-6789
     Hotline: +(84) 456-6789</p>
     </div>

      <div className='ml-28'>
     <label  className='font-semibold text-[12px] ' >Email address:</label> <br />
     <input type="email" id="email" placeholder="&nbsp;&nbsp;Abc@def.com" required className='rounded-md h-[40px] text-[11px] w-[250px] border-2 border-[#9F9F9F] text-[#9F9F9F] mt-3' />
     </div>
     </div>
     </div> 


     <div className='flex ml-[60px] mt-10 '>
      <Image src={Time} width={15} height={15} alt="icon1" className='-mt-[59px]'   />
      <div className='flex'>
      <div className=" bg-[yell] w-[150px] ml-[20px] ">
     <h1 className="text-[#000000] text-[15px] font-medium ">Working Time</h1>
     <p className='text-[#000000]  h-[60px] font-normal text text-[11px]   mt-3- '>Monday-Friday: 9:00 - 22:00
     Saturday-Sunday: 9:00 - 21:00</p>
     </div>

      <div className='ml-28'>
     <label  className='font-semibold text-[12px] ' >Subject</label> <br />
     <input type="subject" id="subject" placeholder="&nbsp;&nbsp;This is an optional" required className='rounded-md h-[40px] text-[11px] w-[250px] border-2 border-[#9F9F9F] text-[#9F9F9F] mt-3' />
     </div>
     </div>
     </div>  


     <div className='flex ml-[250px] mt-10 '>
      
      <div className='flex'>
        
     </div>

      <div className='ml-28'>
     <label  className='font-semibold text-[12px] ' >Message</label> <br />
     <input type="Message" id="Message" placeholder="&nbsp;&nbsp;Hi! id like to ask about" required className='rounded-md  h-[65px] text-[11px] w-[250px] border-2 border-[#9F9F9F] text-[#9F9F9F] mt-3' />
     </div>
     </div>
      
      <div>
     <button className="w-[130px] h-[32px] bg-[#029FAE]  ml-[363px] mt-[30px] rounded-[5px] text-center text-[11px] border-2 border-[#B88E2F] text-[#FFFFFF] hover:bg-[#2c838b]">Submit</button>
     </div>
   
     </div>
     </div>


     <div className='ml-[180px] mr-[190px] mt-28'>
      <div className='h-[200px] w-full bg-[#F4F4F4]'>

      <div className='flex mt-[70px]'>
      <div className='flex ml-[60px] pt-20 '>
      <Image src={Group} width={30} height={25} alt="icon1" className='-mt-[47px]'   />
      <div className='flex'>
      <div className=" w-[150px] ml-[5px] ">
     <h1 className="text-[#000000] text-[15px] font-semibold ">High Quality</h1>
     <p className='text-[#898989]  h-[60px] font-normal  text-[11px]    '>crafted from top materials</p>
     </div>
     </div>
     </div>

     <div className='flex ml-[60px] pt-20 '>
      <Image src={Group1} width={30} height={25} alt="icon1" className='-mt-[47px]'   />
      <div className='flex'>
      <div className=" w-[150px] ml-[5px] ">
     <h1 className="text-[#000000] text-[15px] font-semibold ">Warranty Protection</h1>
     <p className='text-[#898989]  h-[60px] font-normal  text-[11px]    '>Over 2 years</p>
     </div>
     </div>
     </div>

     <div className='flex ml-[60px] pt-20 '>
      <Image src={Group2} width={30} height={25} alt="icon1" className='-mt-[45px]'   />
      <div className='flex'>
      <div className=" w-[150px] ml-[5px] ">
     <h1 className="text-[#000000] text-[15px] font-semibold ">24 / 7 Support</h1>
     <p className='text-[#898989]  h-[60px] font-normal  text-[11px]    '>Dedicated support</p>
     </div>
     </div>
     </div>

     </div>


      </div>
     </div>
     <Footer />

    </>
  )
}

export default page;