import React from "react";
import { Link } from "react-router";
import { FaFileCode } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";

const Header = () => {
    return(
        <>
        
            <div className="flex justify-between px-7 text-black  bg-gray-300  dark:text-white lg:dark:bg-[#212121] h-20 w-[100%] dark:bg-[#121212] lg:w-[100%] lg:h-20  fixed lg:top-0 z-10">
                <Link to = '/'> <h1 className="lg:text-5xl text-3xl font-bold  lg:font-semibold w-26 h-[100%] relative flex justify-center items-center lg:mx-20 lg:items-center  lg:w-50 lg:h-[100%]  ">cureca <span className=" mt-2 lg:mt-4"> <TiArrowRepeat /> </span></h1> </Link>
               
               <div className=" h-[100%] w-60 lg:flex relative list-none text-3xl items-center justify-around hidden ">
               <Link to = '/' className="hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2  "> <li> <AiFillHome /> </li> </Link>
               <a href="https://github.com/thesrijankumar/currencyExchange " className="hover:dark:bg-white flex hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2"> <span> <FaFileCode /> </span> </a>
               <a href="https://www.linkedin.com/in/thesrijankumar/"  className="hover:dark:bg-white  hover:dark:text-black hover:bg-black hover:text-white rounded-md  transition duration-500 ease-in-out p-2"> <span> <FaLinkedin /> </span> </a>


               </div>
               



          
            </div>
        </>
    )
}

export default Header