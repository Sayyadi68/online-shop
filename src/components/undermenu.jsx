import '../tailwind.css';
import '../index.css';
import '../App.css';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";


function Undermenu(){

    return(

        <div className='bg-blue-300 flex-row fixed w-full h-[60px] z-[998] bottom-0 m-auto pt-[5px] justify-between lil:flex sm:hidden xl:hidden 2xl:hidden md:hidden'>
                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[40px] hover:before:h-[5px] hover:before:rounded-xl hover:before:bottom-1 mx-3'>
                    <div className='text-2xl '><FaHome /></div>
                    <span className='text-[13px]'>Home</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[40px] hover:before:h-[5px] hover:before:rounded-xl hover:before:bottom-1 mx-3 '>
                    <div className='text-2xl '><FaUser /></div>
                    <span className='text-[12px]'>Account</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[40px] hover:before:h-[5px] hover:before:rounded-xl hover:before:bottom-1 mx-3 '>
                    <div className='text-2xl '><FaShopify /></div>
                    <span className='text-[13px]'>shop</span>
                </button>

                <button className='w-[50px] h-[50px] flex flex-col justify-center items-center hover:rounded-lg hover:bg-[#f5f5f55b] hover:shadow-lg hover:transition-[.6s] button hover:before:absolute hover:before:bg-[#1791e2] hover:before:w-[40px] hover:before:h-[5px] hover:before:rounded-xl hover:before:bottom-1  mx-3'>
                    <div className='text-2xl '><FaShoppingBasket /></div>
                    <span className='text-[13px]'>basket</span>
                </button>
        </div>
    );
}

export default Undermenu;