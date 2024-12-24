import Image from "next/image";
import Logo from '../../../public/Logo.png'
import Youtube from '../../../public/youtube.svg'
import Facebook from '../../../public/Facebook---Negative 2.svg'
import Twitter from '../../../public/Twitter---Negative 1.svg'
import Insta from '../../../public/insta.svg'
import Pinterest from '../../../public/pinterest.svg'
import Logos from '../../../public/Logos.svg'


const footer = () => {
   return(
      <>
      
    <div className="flex justify-between mr-[190px] bg-[#FFFFFF] ml-[180px] w-[full]  h-[300px] mt-  drop-shadow-sm ">
    <div className=" gap-1 pt-10">
    <div className="flex mt-10 ">
    <Image src={Logo} width={30} height={25} alt="Logo" className=" h-[30px] mb-[px] ml-[6.62px] mt-1" />
    <h1 className="text-[#272343] mt-[8px] ml-1 text-[20px] font-medium ">Comforty</h1>
    </div>
    <p className="text-[#272343]  w-[230px] h-28 text-xs mt-2">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus</p>
    <div className="flex -mt-11 gap-5 ">

    <Image src={Facebook} width={15} height={15} alt="Twitter" className=""/>
    <Image src={Twitter} width={15} height={15} alt="Twitter" className=""/>
    <Image src={Insta} width={15} height={15} alt="insta" className=""/>
    <Image src={Pinterest} width={15} height={15} alt="pinterest" className=""/>
    <Image src={Youtube} width={17} height={1} alt="Youtube" className="mt-[1px] h-3 "/>
    </div>
    </div>

    <ul className="text-[11px] mt-[94px] ml-14">
      <h3 className="mb-2 text-[#9A9CAA] text-[11px]">CATEGORY</h3>
      <li>Sofa</li>
      <li>Arm Chair</li>
      <li>Wing Chair</li>
      <li>Desk Chair</li>
      <li className="gap-[1px]">WoodenChair</li>
      <li>Park Bench</li>
    </ul>

    <ul className=" text-[11px] mt-[94px] ml-14">
      <h3 className="mb-2 text-[#9A9CAA] text-[11px]">SUPPORT</h3>
      <li>Help&Support</li>
      <li>Tearms&Conditions</li>
      <li>Privacy Policy</li>
      <li>Help</li>
    </ul>

    <div className=" mt-[94px] ml-14">
      <h3 className="text-[#9A9CAA] text-[11px] mb-2">NEWSLETTER</h3>
       
         
        <input className="w-[70%] text-[11px] h-7 text-[#9A9CAA] border-b" type="email" id="email" placeholder=" Your email" required/>
        <button className="w-[70px] h-[30px] bg-[#029FAE]  ml-[7px] mt-[10px] rounded-[5px] text-center text-[11px] text-[#FFFFFF] hover:bg-[#2c838b]">Subscribe</button>
          
    
         <p className="text-[11px] w-full mt-2 -mr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam tincidunt erat enim.</p>
         </div>
    {/* <button className="w-[115px] h-[30px] bg-[#029FAE] pb-1 pl-2 mt-[12px] rounded-[5px] text-center text-[13px] text-[#FFFFFF]">Subscribe</button> */}
          
    </div>

<div className=" flex w-[200px] mt-[10px] ml-[180px] whitespace-nowrap mr-[190]text=[11px] h-[45px] ">
  <p className="text-[#9A9CAA] text-[12px] pt-3 flex">@ 2021 - Blogy - Designed & Develop by<p className="text-black text-[12px]">Zakirsoft</p></p>
  <Image src={Logos} width={210} height={10} alt="Logos" className="rounded-[8px] ml-[355px] mt-[9px] h-[25px] opacity-[60%] mix-blend-darken"/>
</div>
</>
 




   )
}
export default footer;