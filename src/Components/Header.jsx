import React from "react";
import { Link } from "react-router";

const Header = () => {
    return(
        <>
            <div className="flex justify-between px-7 text-white bg-black py-5">
                <Link to = '/'>
                    <h1 className="text-3xl">Cureca</h1>
                </Link>
                <ul className="flex text-xl gap-8">
                    <Link to = '/'>
                        <li> Home </li>
                    </Link>
                    <a href="https://github.com/thesrijankumar/currencyExchange">
                        <li> src code ↵ </li>
                    </a>
                    <a href="https://www.linkedin.com/in/thesrijankumar/">
                        <li> LinkendIn </li>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Header