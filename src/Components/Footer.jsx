import React from "react";

const Footer = () => {
    return(
        <>
            <div className="bottom-0 justify-between px-40 text-xl w-[100%] py-8 flex absolute text-gray-400 bg-black">
                <div>
                    <h2 className="text-xl mb-1 font-bold">Random Quote</h2>
                    <h3>Male ego, the most fragile thing</h3>
                    <h3>in existence 💔</h3>
                </div>
                <ul>
                    <li className="text-xl mb-1 font-bold">Connect with me</li>
                    <a href="https://github.com/thesrijankumar">
                        <li className="cursor-pointer">Github</li>
                    </a>
                    <a href="https://www.linkedin.com/in/thesrijankumar/">
                        <li className="cursor-pointer">LinkendIn</li>
                    </a>
                </ul>
                <ul>
                    <li className="text-xl mb-1 font-bold">Links</li>
                    <a href="https://exchangeratesapi.io">
                        <li className="cursor-pointer">Exchange Rate API</li>
                    </a>
                    <a href="#">
                        <li className="cursor-pointer">Quotes API</li>
                    </a>
                </ul>
                <ul>
                    <li className="text-xl mb-1 font-bold">About me</li>
                    <li className="cursor-text">📩thesrijankumar@proton.me</li>
                    <a href="https://maps.app.goo.gl/hvSjrfwP32nksNaZA">
                        <li className="cursor-pointer">Lives at ❤️ of India</li>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Footer