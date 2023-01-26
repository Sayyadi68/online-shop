import '../tailwind.css';
import '../index.css';
import '../App.css';



function Closemenu(){

    function menuclose(){
        document.getElementById("show").classList.add("translate-x-64");
        document.getElementById("closemenu").classList.add("hidden");
        document.getElementById("removescroll").classList.remove("overflow-y-hidden");
    }

    return(
        <button className='w-full h-full bg-[#0707078e] z-[1000] fixed top-0 hidden' id='closemenu' onClick={menuclose}></button>
    );
}

export default Closemenu;