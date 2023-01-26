import '../tailwind.css';
import '../index.css';
import '../App.css';
import image1 from "../img/desktop-home-price-banner.4c0d293.png"
import image2 from "../img/desktop-home-buy-banner.2159f22.png"
import image3 from "../img/desktop-home-main-banner.4eca7c2.png"

function Carousel(){

    return(

        
        <div id="indicators-carousel" class="relative left-9 mt-24 mx-20 lil:left-0 lil:mx-10" data-carousel="static">
        
        
            <div class="relative h-56 overflow-hidden rounded-lg md:h-[300px] bg-gray-500">
            
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    
                    <img src={image3} alt="" className='w-full h-full ' />
                </div>
        
            
                <div class="hidden duration-700 ease-in-out " data-carousel-item>
             
                    <img src={image2} alt="" className='w-full h-full' />
                </div>
            
                
                <div class="hidden duration-700 ease-in-out " data-carousel-item="active">
                
                    <img src={image1} alt="" className='w-full h-full' />
                </div>
            
            
            </div>
        
        
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 ">
                <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-gray-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
        
        
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

        
    );
}

export default Carousel;