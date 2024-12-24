import React from 'react'
import Image from 'next/image'
import Logo2 from '../../../public/Logo2.jpg'
import Navbar from '@/components/Navbar'
import Logo1 from '../../../public/Logo1.jpg'
import Logo3 from '../../../public/Logo3.jpg'
import img4 from '../../../public/img4.png'
import img2 from '../../../public/img2.jpg'
import cart3 from '../../../public/cart3.svg'
import Footer from '../../components/Footer/index'
import Logo7 from '../../../public/Logo7.jpg'






const page = () => {
  return (
    <>
    <Navbar />

    <div className='ml-[180px] mr-[190px]' >
      <div className='flex'>
       <Image src={Logo2} width={512} height={312} alt="2" className="h-[365px] w-[385px] mt-5 rounded-md "></Image>
        <div className=''>
       <h1 className="text-[#272343] text-[30px] -ml-[87px] font-bold mb- pt-9 text-center  ">Library Stool</h1>
       <h1 className='text-left ml-[50px] text-[#272343] text-[30px] font-bold -mt-2'>Chair</h1>
       <button className="w-[90px] h-[25px] bg-[#029FAE] mt-3 rounded-full text-center text-[12px] text-[#FFFFFF] hover:bg-[#2c838b] ml-[45px]">$20.00 USD</button>
       <h3 className='w-[300px] h-[1px] bg-[#D9D9D9] mt-6 ml-[48px]'></h3>
       <p className='text-black text-[13px] mt-6 ml-[47px] w-[330px]'  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
       <button className="flex w-[90px] h-[30px] bg-[#029FAE]  ml-[47px] mt-[10px] pt-[6px] pl-[3px] rounded-[5px] text-center text-[11px] text-[#FFFFFF] hover:bg-[#2c838b]"><Image src={cart3} width={16} height={16} alt="Buy2" className='mr-[2px]' />Add To Cart</button>


       </div>
       </div>
       {/* <h1 className='text-left ml-[65px] text-[#272343] text-[35px] font-bold  '>Chair</h1>
       <button className="w-[90px] h-[25px] bg-[#029FAE] mt-3 rounded-full text-center text-[12px] text-[#FFFFFF] hover:bg-[#2c838b] ml-[62px]">$20.00 USD</button>

       <p className='w-[300px] h-[1px] bg-[#D9D9D9] mt-6 ml-[51px]'></p>
       <p className='text-black text-[13px] ml-16 mt-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
       </div> 
       </div> */}
      <div className='w-full h-[402] mt-10 '>
      <div className='flex justify-between'>
      <h1 className="text-[#272343] text-[22px] font-semibold mb-5 text-left">Featured Products</h1>
      <button className="w-[70px] h-[30px] hover:bg-black hover:text-white  ml-[7px] mt-[10px] rounded-[5px] text-center text-[11px] text-black border-b-1 border-black">View All</button>

      </div>
      <div className='flex gap-4  mr-3'>

     <Image src={Logo7} width={212} height={212} alt="2" className="h-[155px] w-[155px] rounded-md "></Image>
     <Image src={Logo1} width={212} height={212} alt="1" className="h-[155px] w-[155px]  rounded-md "></Image>
     <Image src={img4} width={212} height={212} alt="4" className="h-[155px] w-[155px] rounded-md "></Image>
     <Image src={Logo3} width={212} height={212} alt="4" className="h-[155px] w-[155px] rounded-md "></Image>

     <Image src={img2} width={212} height={212} alt="4" className="h-[155px] w-[155px] rounded-md "></Image>
        </div> 
      </div>       
    </div>

    <Footer />
    </>
  )
}

export default page