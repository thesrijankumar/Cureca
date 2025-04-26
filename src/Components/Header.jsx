import React from "react";
import { Link } from "react-router";
import { FaFileCode } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";

const Header = () => {
    return(
        <>
        
            <div className="flex justify-between px-7 text-black bg-white dark:text-white dark:bg-[#212121]  w-[100%] h-20  fixed top-0">
                <Link to = '/'> <h1 className="text-5xl weight- w-50 h-[100%] relative flex justify-center items-center  ">cureca <span className=" mt-4"> <TiArrowRepeat /> </span></h1> </Link>
               
               <div className=" h-[100%] w-60 flex relative list-none text-3xl items-center justify-around ">
               <Link to = '/' className="hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2"> <li> <AiFillHome /> </li> </Link>
               <a href="https://github.com/thesrijankumar/currencyExchange " className="hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2"> <span> <FaFileCode /> </span> </a>
               <a href="https://www.linkedin.com/in/thesrijankumar/"  className="hover:dark:bg-white  hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2"> <span> <FaLinkedin /> </span> </a>


               </div>
               



          
            </div>
        </>
    )
}

export default Header