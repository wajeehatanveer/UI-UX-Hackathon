import Image from "next/image";
import Product from "../../../public/Product Image.png"
import Zapier from '../../../public/Zapier.png'
import Pipedrive from '../../../public/Pipedrive.png'
import CIBBank from '../../../public/CIBBank.png'
import Z from '../../../public/z.png'
import BurnBroast from '../../../public/BurnBroast.png'
import  Pandadoc from '../../../public/Pandadoc.png'
import Moz from '../../../public/Moz.png'
import Logo1 from '../../../public/Logo1.jpg'
import Logo2 from '../../../public/Logo2.jpg'
import Logo3 from '../../../public/Logo3.jpg'
import Logo4 from '../../../public/Logo4.jpg'
import Logo5 from '../../../public/Logo5.jpg'
import Logo6 from '../../../public/Logo6.jpg'
import Logo7 from '../../../public/Logo7.jpg'
import img2 from '../../../public/img2.jpg'
import img3 from '../../../public/img3.jpg'
import img4 from '../../../public/img4.png'
import Logo from '../../../public/Logo.png'
import Footer from '../Footer/index'
import Arrow from '../../../public/Line (1).svg'
import Addcart from '../../../public/cart 2.svg'
import Link from "next/link";







const HeroSection = () => {
    return (


          //  1st Herosection 
          <>
          
          <div className=" w-[full] h-[500px] ml-[180px] border-b mr-[190px] bg-[#F0F2F3] ">
            <p className="h-[14px] pt-[129px] pl-[70px] font-normal text-[12px] text-[#272343] pb-1">WELCOME TO CHAIRY</p>
            <h1 className=" w-[357px] h-[157px] pl-[70px] text-[30px] pt-5 font-bold">Best Furniture<br /> Collection 
              for your<br /> interior.</h1>
            <div className="flex pl-[70px]">
            <Link href='/Products' className="flex w-[126px] h-[40px] bg-[#029FAE] pb-1 pl-4 pt-2 mt-[12px] rounded-[8px] text-left text-[14px] text-[#FFFFFF] hover:bg-[#2c838b]">Shop Now <Image src={Arrow} width={15} height={5} alt="ZAPIER" className=" h-3 mt-[5px] ml-2 hover:translate-x-1 transition-transform "></Image></Link>
           </div> 
           <div className="flex justify-end bg-[#F0F2F3] -mt-72 ">
          <Image src={Product} width={320} height={800} alt="linelogo" className="pr-[70px]  bg-[#F0F2F3] h-[350px]"></Image>
          </div>
          </div>

           {/* 2nd Herosection */}

          <div className='w-[full] h-[90px] mt-5 gap-10 items-center ml-[180px] mr-[190px] '>
            <div className="flex justify-between">
          <Image src={Zapier} width={55} height={10} alt="ZAPIER" className="h-7 mt-1 "></Image>
          <Image src={Pipedrive} width={65} height={10} alt="Pipedrive" className="h-5 mt-3"></Image>
          <Image src={CIBBank} width={70} height={68} alt="cibbank" className="h-10 mt-1"></Image>
          <Image src={Z} width={65} height={10} alt="z" className="ml-[] -mt-1  "></Image>
          <Image src={BurnBroast} width={55} height={68} alt="burnbroast" className="-mt-2"></Image>
          <Image src={Pandadoc} width={80} height={58} alt="pandadoc" className=" h-5 mt-4"></Image>
          <Image src={Moz} width={55} height={68} alt="MOZ" className="ml] justify-end h-5 mt-4"></Image>
          </div>
          </div>

          {/* 3rd Herosection */}

          <div className=" w-[full] h-[241px]  mt-5 ml-[180px] mr-[190px] ">
          <h1 className="text-[#272343] text-[22px] font-medium">Featured Products</h1>
          <div className="flex gap-3  ">
           <div>

            
           <div>
          <Image src={Logo1} width={312} height={312} alt="1" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
          <span className=" absolute w-[30px]  h-[16px] text-center top-[892px] left-[184px] text-white text-[10px] rounded-[3px] bg-[#01AD5A] ">New</span>
          </div>

          <div  className=" text-[11px] font-normal hover:text-[#007580] mt-2">
          <p>Library Stool Chair</p>
          <span className="font-semibold text-[10px] text-[#272343]">$20</span>
          <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[168px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
          <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
          </p>
          </div>
          </div>
          

           <div>
            <div>
          <Image src={Logo2} width={312} height={312} alt="2" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
          <span className=" absolute w-[30px]  h-[16px] text-center top-[892px] left-[398px] text-white text-[10px] rounded-[3px] bg-[#F5813F]">Sales</span>
           </div>
          <div  className="text-[11px] font-normal hover:text-[#007580]  mt-2 ">
          <p>Library Stool Chair</p>
          <span className="font-semibold text-[10px] text-[#272343]">$20<del className="text-[8px] text-[#9A9CAA]  mt-1 font-medium ml-1">$30</del></span>
          <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[168px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
          <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
          </p>
          </div>
          </div>
          

           <div>
          <Image src={Logo3} width={312} height={312} alt="3" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
          <div  className="text-[11px] font-normal hover:text-[#007580]  mt-2  ">
          <p>Library Stool Chair</p>
          <span className="font-semibold text-[10px] text-[#272343]">$20</span>
          <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[168px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
          <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
          </p>
          </div>
          </div>

          <div>
          <Image src={Logo4} width={312} height={312} alt="4" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
          <div  className=" text-[11px] font-normal hover:text-[#007580]  mt-2  ">
          <p>Library Stool Chair</p>
          <span className="font-semibold text-[10px] text-[#272343]">$20</span>
          <p className="bg-[#F0F2F3] w-[34px] h-[34px] ml-[168px] items-center pt-[8px] pl-[7px] -mt-[32px] rounded-md hover:bg-[#029FAE]">
          <Image src={Addcart} width={17} height={18} alt="cart" className="rounded-md  "></Image>
          </p>
          </div>
          </div>

          </div>
          </div>



           {/* 4 Herosection  */}
           <div className=" w-[full] ml-[180px] mr-[190px]  h-[328px] mt-[100px] ">
          <h1 className="text-[#272343] text-[22px] font-medium">Top categories</h1>
          <div className="flex gap-3">

           <div className="hover:transition duration-150  ease-in-out ">
          <Image src={img2} width={190} height={200} alt="2" className="h-[273px] w-[273px] mt-5 rounded-md "></Image> 
          <span className="text-[12px] text-[#FFFFFF] font-medium absolute bg-[#000000B2] w-[273px]  top-[1445px] h-14 pl-3 pt-[12px] pb-[5px] mb-3  rounded-b-md">Wing Chair<br /> <p className="text-[#FFFFFF] text-[9px] font-normal ">3,584 Products</p>
          </span>
          </div>
          
          <div>
          <Image src={img3} width={312} height={312} alt="3" className="h-[273px] w-[273px] mt-5 rounded-md"></Image>
          <span className="text-[12px] text-[#FFFFFF] font-medium absolute bg-[#000000B2] w-[273px]  top-[1445px] h-14 pl-3 pt-[12px] pb-[5px] mb-3  rounded-b-md">Wooden Chair<br /> <p className="text-[#FFFFFF] text-[9px] font-normal ">157 Products</p>
          </span>
          </div>
          
          <div>
          <Image src={img4} width={312} height={312} alt="4" className="h-[273px] w-[273px] mt-5 rounded-md"></Image>
          <span className=" text-[12px] text-[#FFFFFF] font-medium absolute bg-[#000000B2] w-[273px]  top-[1445px] h-14 pl-3 pt-[12px] pb-[5px] mb-3  rounded-b-md">Desk Chair<br /> <p className="text-[#FFFFFF] text-[9px] font-normal ">154 Products</p>
          </span>
          </div>
      
          </div>
          </div>

           {/* 5 Herosection  */}
           
<div className="flex  w-[full]  ml-[180px] mr-[190px] h-[428px] mt-[100px]  ">
<div className="flex w-full">
<h3 className="-rotate-90 mt-[194px] -ml-[400px] w-full h-[33px] font-normal text-[20px] text-center">EXPLORE NEW AND POPULAR STYLES</h3>
 <Image src={Logo3} width={312} height={312} alt="1" className="h-[393px] w-[440px] mt-3 -ml-[407px]"></Image>
  <div className="  w-[355px] ">
<div className="flex">
 <Image src={Logo4} width={312} height={312} alt="4" className="h-[190px] w-[170px] ml-3 mt-3 "></Image>
 <Image src={Logo1} width={312} height={312} alt="1" className="h-[190px] w-[170px] ml-3 mt-3 "></Image>
 </div>
 <div className="flex">
 <Image src={Logo6} width={312} height={312} alt="6" className="h-[190px] w-[170px] ml-3 mt-3 "></Image>
 <Image src={Logo1} width={312} height={312} alt="1" className="h-[190px] w-[170px] ml-3 mt-3 "></Image>
 </div>
 </div>
 </div>
 </div>
 

          

             {/* 6 Herosection   */}

             
             <div className=" w-[full]  h-[620px] ml-[180px] mr-[190px] mt-[100px] drop-shadow-sm">

            <h1 className="text-[#272343] text-[22px] font-medium mb-5 text-center">Our Products</h1>
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
          <Image src={img2} width={312} height={312} alt="5" className="h-[205px] w-[205px] mt-5 rounded-md"></Image>
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
          
              
              </div>
              
             
            

          </>
    );
  }
          export default HeroSection;
          
          

          

{/* <Image src={Line} width={9} height={9} alt="linelogo"></Image> */}