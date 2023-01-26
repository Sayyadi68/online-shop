import '../tailwind.css';
import '../index.css';
import '../App.css';
import image from "../img/SHI_LERA GROP.png"
import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function Header(){

    function burger(){
        document.getElementById("show").classList.remove("translate-x-64");
        document.getElementById("closemenu").classList.remove("hidden");
        document.getElementById("removescroll").classList.add("overflow-y-hidden");
    }

    return(
    
        <div className='flex flex-row justify-between pt-[1rem] pb-[1rem] bg-blue-300 items-center fixed w-full top-0 z-[997]'>

            <div className='mx-3 flex items-center flex-row-reverse'>
                <h1 className='font-mono text-2xl ml-9 lil:hidden'> SHI_LERA </h1>
                <img src={image} alt="" className='w-[30px] h-[40px]' />
            </div>
            <div className='flex  flex-row-reverse justify-between items-center'>

                <div className='mx-3 text-2xl cursor-pointer' id='burgershow' onClick={burger}>
                    <FaBars />
                </div>


                <label class="relative inline-flex items-center cursor-pointer mr-7">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 flex justify-between p-1"> <FaMoon /> <FaSun /></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Theme</span>
                </label>

            </div>
        </div>

        
    );

   

}

export default Header;