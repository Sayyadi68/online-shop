import '../tailwind.css';
import '../index.css';
import '../App.css';
import image1 from "../img/desktop-home-price-banner.4c0d293.png"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function Itemtable(){


    function Previous() {
        document.getElementById("rightleftscroll").scrollBy(-200,0);
    }

    function Next() {
        document.getElementById("rightleftscroll").scrollBy(200,0);
    }

    return(

        
        
        

        
        <div id="indicators-carousel" class="relative left-9 mt-10 mx-20 lil:left-0 lil:mx-10" data-carousel="static">
                   
                        <h3 className='text-2xl mx-5'>item categori</h3>

                    <div class="relative w-full h-50 overflow-hidden rounded-lg mt-3 grid grid-cols-14 grid-rows-1 shop_box lil:overflow-x-visible" id='rightleftscroll'>
                    
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 1 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 2 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 3 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 4 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 5 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 6 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 7 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 8 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 9 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 10 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 11 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 12 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 13 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        <div class="ShopItem"><a href="./cart.html"><img src={image1} alt=""/><p> 14 </p></a><div className='m-auto'><button class="removeitem mx-3"><FaMinus/></button><button class="additem mx-3"><FaPlus/></button></div></div>
                        
                    </div>
                        
                
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none lil:hidden" data-carousel-prev onClick={Previous}>
                        <span class="lil:hidden inline-flex items-center justify-center w-8 h-8 sm:w-10 rounded-full sm:h-10 bg-gray-600 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="lil:hidden w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only lil:hidden">Previous</span>
                        </span>
                    </button>

                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none lil:hidden" data-carousel-next onClick={Next}>
                        <span class="lil:hidden inline-flex items-center justify-center w-8 h-8 sm:w-10 rounded-full sm:h-10 bg-gray-600 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="lil:hidden w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="lil:hidden sr-only">Next</span>
                        </span>
                    </button>


        </div>
        
        
    );
}

export default Itemtable;