import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '../../components/Footer/index'
import Image from 'next/image'
import Plus from '../../../public/Plus.svg'



const page = () => {
  return (
    <>
    <Navbar />
    <div className='ml-[180px] mr-[190px]'>
    <div className='w-full h-[500px]'>

    <h1 className="text-[#272343] text-[22px] font-bold  text-center"> Questions Looks Here </h1>
    <p className='text-[#4F4F4F] font-normal text-center text-[12px]  mt-3 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  </p>
     
    <div className='flex mt-10 gap-4 '>

     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#272343] text-[15px] font-bold flex text-left justify-between">What types of chairs do you offer?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal text-left text-[12px] mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
     </div>
     
     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#272343] text-[15px] font-bold  text-left flex justify-between">Do your chairs come with a warranty?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal  text-[12px] mt-3 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? </p>
     </div>
      </div>

      <div className='flex mt-5 gap-4 '>
     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#272343] text-[15px] font-bold  text-left flex justify-between ">What will be delivered? And When?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal text-left text-[12px] mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
     </div>
     
     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#1f1b35] text-[15px] font-bold  text-left flex justify-between ">What will be delivered? And When?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal  text-[12px] mt-3 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? </p>
     </div>
      </div>

      <div className='flex mt-5 gap-4 '>
     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#272343] text-[15px] font-bold  text-left flex justify-between ">Can I try a chair before purchasing?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal text-left text-[12px] mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
     </div>
     
     <div className='w-[425px] h-[110px] pt-2 pb-2 pl-3 pr-3 bg-[#F7F7F7]'>
     <h1 className="text-[#272343] text-[14px] font-bold  text-left flex justify-between  ">How do I clean and maintain my Comforty chair?<Image src={Plus} width={18} height={18} alt="2"  /></h1>
     <p className='text-[#4F4F4F] font-normal  text-[12px] mt-3 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? </p>
     </div>
      </div>

     </div>
    </div>
    <Footer />
    
    </>
  )
}

export default page
