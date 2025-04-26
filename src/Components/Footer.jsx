import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

const Footer = () => {
    return(
        <>
            <div className="bottom-0 justify-between px-40 w-[100%] py-8 flex absolute dark:text-white dark:bg-[#212121] bg-white text-black ">
                

                <div className=" w-70 h-22 relative flex flex-col cursor-default ">
                    <h3 className="font-bold" >Random Quote</h3>
                    <p className="font-light flex ">Male ego, the most fragile thing in existence <span className=" relative my-7.5 right-48"> <FaHeartBroken /> </span> </p>
                </div>

                <div className=" w-50 h-22 relative flex flex-col gap-3  items-center ">
                    <h3 className="font-bold flex flex-col  " >Connect with me</h3>
                    <div className="relative flex text-3xl gap-2  ">
                    <a href="https://github.com/thesrijankumar flex text-3xl"> <FaGithub /> </a>
                    <a href="https://www.linkedin.com/in/thesrijankumar/"> <FaLinkedin /> </a>
                    </div>

                </div>

                <div className=" w-55 relative flex flex-col items-start px-5">
                    <h3  className="text-xl mb-1 font-semibold"> Links</h3>
                    <a href="https://exchangeratesapi.io"> Exchange Rate API</a>
                    <a href="#">Quotes API</a>
                </div>

                <div className="h-22 w-70 flex flex-col">
                 
                    <div className=" relative"><h3 className="text-xl mb-1 font-semibold "> About me</h3></div>
                    <div  className="w-56 "><a href="mailto:thesrijankumar@proton.me" className="items-center"> <span className="flex items-center right-2 gap-2"> <IoMdMailUnread /> thesrijankumar@proton.me</span></a></div>
                    <div  className="w-56 "><a href="https://maps.app.goo.gl/hvSjrfwP32nksNaZA" className="items-center"> <span className="flex items-center right-2 gap-2"> <FaLocationDot /> India</span></a></div>
                </div>

            </div>
        </>
    )
}

export default Footer