import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logo1 from '../../../public/Logo1.jpg'
import Delivery from '../../../public/Delivery.svg'
import Checkmark from '../../../public/Checkmark--outline.svg'
import Purchase from '../../../public/Purchase.svg'
import Sprout from '../../../public/Sprout.svg'
import About1 from '../../../public/About1.webp'
import About2 from '../../../public/About2.webp'
import About3 from '../../../public/About3.webp'
import Footer from '../../components/Footer/index'



const page = () => {
  return (
    <>
    <Navbar />
    <div className='ml-[180px] mr-[190px]'>
    <div className=' h-[400px] w-full '>
      <div className='flex gap-4'>
      <div className='h-[345px] w-[414px] bg-[#007580]'>
      <h1 className="text-[#FFFFFF] text-[22px] font-semibold pt-10 pl-6 text-left">About Us - Comforty</h1>
      <p className='text-[#FFFFFF] font-normal text-[12px] w-[370px] mt-3 ml-6'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
      <button className='w-[100px] bg-[#F9F9F926] h-[30px] ml-6 mt-[135px] text-[#FFFFFF] text-[12px]'>View Collection</button>
        </div>
         <div>  
        <Image src={Logo1} width={512} height={312} alt="2" className="h-[345px] w-[414px] "></Image>
        </div>
      </div>
    </div>

    <div className='w-full h-[290px]  mt-5' >
    <h1 className="text-[#272343] text-[22px] font-semibold  text-center">What Makes Our Brand Different</h1>
     <div className='flex gap-[21px] mt-10 '>

     <div className="h-[150px] w-[195px] bg-[#F9F9F9] pl-5 pr-5">
     <Image src={Delivery} width={18} height={18} alt="1" className=' mt-3 ' /> 
     <p className='text-[#007580] text-[15px] font-normal mt-2 '>Next day as standard</p>
     <p className='text-[#007580] text-[12px] font-normal mt-2 '>Order before 3pm and get your order the next day as standard</p>

     </div>

     <div className="h-[150px] w-[195px] bg-[#F9F9F9] pl-5 pr-5">
     <Image src={Checkmark} width={18} height={18} alt="2" className='mr-[2px] mt-3' />
     <p className='text-[#007580] text-[15px] font-normal mt-2 '>Made by true artisans</p>
     <p className='text-[#007580] text-[12px] font-normal mt-2 '>Handmade crafted goods made with real passion and craftmanship</p>
 
     </div>

     <div className="h-[150px] w-[195px] bg-[#F9F9F9] pl-5 pr-5">
     <Image src={Purchase} width={18} height={18} alt="3" className='mr-[2px] mt-3' /> 
     <p className='text-[#007580] text-[15px] font-normal mt-2 '>Unbeatable prices</p>
     <p className='text-[#007580] text-[12px] font-normal mt-2 '>For our materials and quality you won’t find better prices anywhere</p>

     </div>

     <div className="h-[150px] w-[195px] bg-[#F9F9F9] pl-5 pr-5">
     <Image src={Sprout} width={18} height={18} alt="4" className='mr-[2px] mt-3'/> 
     <p className='text-[#007580] text-[15px] font-normal mt-2 '>Recycled packaging</p>
     <p className='text-[#007580] text-[12px] font-normal mt-2 '>We use 100% recycled to ensure our footprint is more manageable</p>
     </div>
     </div>
    </div>

    <div className='w-full h-[400px]  mt-3'>
    <h1 className="text-[#272343] text-[30px] font-semibold  text-left">Our Popular Products </h1>
    <div className='flex mt-8 gap-4'>
    <div>
    <Image src={About1} width={512} height={312} alt="1" className="h-[245px] w-[414px] "></Image>
    <p className='text-[#2A254B] text-[14px] font-normal mt-2'>The Poplar suede sofa</p>
    <span className='text-[#2A254B] text-[12px] font-normal mt-2'>$99.00</span>
    </div>

      <div>
     <Image src={About2} width={512} height={312} alt="2" className="h-[245px] w-[205px] "></Image>
     <p className='text-[#2A254B] text-[14px] font-normal mt-2'>The Dandy chair</p>
    <span className='text-[#2A254B] text-[12px] font-normal mt-2'>$99.00</span>
    </div>

    <div>
    <Image src={About3} width={512} height={312} alt="3" className="h-[245px] w-[205px] "></Image> 
    <p className='text-[#2A254B] text-[14px] font-normal mt-2'>The Dandy chair</p>
    <span className='text-[#2A254B] text-[12px] font-normal mt-2'>$99.00</span>
    </div>


    </div>
    </div>



 {/* main div */}
 </div>
 <Footer />

    </>
  )
}


export default page
{/* <Image src={Logo2} width={512} height={312} alt="2" className="h-[365px] w-[385px] mt-5 rounded-md "></Image> */}