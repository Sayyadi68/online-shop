import '../tailwind.css';
import '../index.css';
import '../App.css';
import image from "../img/SHI_LERA GROP.png"
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";


function Sidemenu(){
    return(

        <div className='bg-blue-300 grid grid-cols-1 grid-rows-20 fixed w-[70px] h-full top-0 content-between z-[998] lil:hidden'>

            <div className='m-auto relative top-[10px] flex items-center'>
                <img src={image} alt="" className='w-[30px] h-[40px]' />
            </div>

            <div className=' m-auto left-3 top-20 absolute '>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mb-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[-2px]'>
                    <div className='text-2xl '><FaHome /></div>
                    <span className='text-[13px]'>Home</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mb-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[-2px] '>
                    <div className='text-2xl '><FaUser /></div>
                    <span className='text-[12px]'>Account</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mb-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[-2px] '>
                    <div className='text-2xl '><FaShopify /></div>
                    <span className='text-[13px]'>shop</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mb-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[-2px]'>
                    <div className='text-2xl '><FaShoppingBasket /></div>
                    <span className='text-[13px]'>basket</span>
                </button>
            
            
            </div>

            <div className='m-auto mb-5'>
                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mt-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[8px]'>
                    <div className='text-2xl '><FaBook /></div>
                    <span className='text-[13px]'>About</span>
                </button>
                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center mt-6 hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[5px] hover:before:h-[40px] hover:before:rounded-xl hover:before:left-[8px]'>
                    <div className='text-2xl '><FaQuestionCircle /></div>
                    <span className='text-[12px]'>Help</span>
                </button>
            </div>
            

    </div>
            
        
        
    );
}

export default Sidemenu;

