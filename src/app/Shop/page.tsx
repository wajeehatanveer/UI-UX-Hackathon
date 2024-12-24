import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '../../components/Footer/index'
import img2 from '../../../public/img2.jpg'
import Logo3 from '../../../public/Logo3.jpg'
import Frame from '../../../public/Frame.svg'
import Frame1 from '../../../public/frame 1.svg'



const page = () => {
  return (
  <>
  <Navbar /> 
    <div className='ml-[180px] bg-[#FFFFFF] mr-[190px]'>

      <div className='w-[600px] bg-[#FFFFFF] h-[210px]  drop-shadow-sm'>
      <h1 className="text-[#000000] text-[15px] font-medium ">Bag</h1>
      <div className='flex'>
      <Image src={Logo3} width={212} height={212} alt="4" className="h-[135px] w-[135px] mt-5 "></Image>
      <div className='pt-5 ml-[25px] '>
        <p className='text-[11px] font-normal text-[black] justify-between'>Library Stool Chair<span className='ml-[230px]'>MRP: $99</span></p>
        <p className='text-[#757575] text-[10px] pt-[45px] font-normal '>Ashen Slate/Cobalt Bliss</p>
        <p className='text-[#757575] text-[10px] font-normal pt-[3px]  '>Size L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity 1 </p>
        <div className='flex gap-[15px]'>
        <Image src={Frame} width={18} height={15} alt="frame" className="mt-6"/>
        <Image src={Frame1} width={13} height={12} alt="frame1" className="mt-6"/>
          
        </div>
      </div>
 </div>
      </div>
      
     
      <div className='w-[600px] h-[170px] bg-[#FFFFFF] mt-3 drop-shadow-sm'>
      
        <div className='flex'>
      <Image src={img2} width={212} height={212} alt="4" className="h-[135px] w-[135px] mt-5 "></Image>
      <div className='pt-5 ml-[25px] '>
        <p className='text-[11px] font-normal text-[black] justify-between'>Library Stool Chair<span className='ml-[230px]'>MRP: $99</span></p>
        <p className='text-[#757575] text-[10px] pt-[45px] font-normal '>Ashen Slate/Cobalt Bliss</p>
        <p className='text-[#757575] text-[10px] font-normal pt-[3px]  '>Size L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity 1 </p>
        <div className='flex gap-[15px]'>
        <Image src={Frame} width={18} height={15} alt="frame" className="mt-6"/>
        <Image src={Frame1} width={13} height={12} alt="frame1" className="mt-6"/>

        </div>
      </div>

       </div>
        

        <div className='w-[240px] ml-[605px]  h-[200px] -mt-[370px]'>
        <h1 className="text-[#000000] text-[13px] font-medium ">Summary</h1>
        <p className='text-[#000000] text-[10px] mt-[12px] font-normal justify-between h-[50px] items-center bg-[#FFFFFF] drop-shadow-sm '>Subtotal
           <span className='font-medium ml-[150px]'>$198.00</span>
           <p className='pt-[5px]'>Estimated Delivery & Handling<span className='font-medium ml-[63px]'>Free</span>
           </p>
           </p>
         
           <p className='text-[#000000] text-[10px] mt-[5px] font-normal justify-between h-[30px] items-center bg-[#FFFFFF] drop-shadow-sm '>Total<span className='font-medium ml-[165px]'>$198.00</span></p>
             
          <button className="w-[220px] h-[35px] bg-[#029FAE]  ml-[10px] mt-[20px] rounded-[30px] text-center  text-[11px] text-[#FFFFFF] hover:bg-[#2c838b]">Member checkout</button>

          


        </div>
        {/* flex div> */}
        
        


      </div>
    </div>

    <Footer />
    </>
  )
}

export default page




// Image src={img2} width={212} height={212} alt="2" className="h-[135px] w-[135px] mt-5 "></Image>