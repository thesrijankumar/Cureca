import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function Home() {
    
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [inputAmount, setInputAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [rates, setRates] = useState({});
    const access_key = import.meta.env.VITE_ACCESS_KEY;

    const changeInputValue = (event) => {
        setInputAmount(event.target.value)
    }

    useEffect(() => {
        if (!rates[fromCurrency] || !rates[toCurrency] || inputAmount === 0) {
            setConvertedAmount(0); // Return 0 if conversion is not possible
            return;
        }
    
        const result = (inputAmount / rates[fromCurrency]) * rates[toCurrency];
        setConvertedAmount(result.toFixed(2));
    }, [fromCurrency, toCurrency, inputAmount, rates]);


    useEffect(() => {
        axios.get(`https://api.exchangeratesapi.io/v1/latest?access_key=${access_key}`)
        .then((res) => {
            setRates(res.data.rates)
        })
        .catch((error) => {
            console.log(error); 
        })
    },[])

    return(
        <>
        <div className="flex  justify-center  lg:dark:bg-[#121212]  bg-white lg:h-[100vh] h-screen w-screen dark:bg-[#212121]  ">        
            <div id="main-box" className=" w-[88%]  align-center justify-center p-6 flex border-2 rounded-2xl dark:border-white border-black lg:h-34 mt-40 lg:flex-row flex-col h-100 ">

                <div className=" w-64 h-20 flex rounded-xl  mx-[auto]  ">
                    <div id="currency-selector-here" className="flex dark:bg-white dark:text-white lg:bg-gray-900  relative  lg:w-[40%] lg:h-[100%] lg:px-1 lg:rounded-l-xl rounded-l-xl w-[40%]">
                            <select 
                                className="dark:text-black  text-white bg-gray-900 outline-none  dark:bg-white relative h-[100%] w-[90%] text-center rounded-l-xl text-xl "
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}> 
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                                <option value="EUR">EUR</option>
                                <option value="JPY">JPY</option>
                                <option value="AUD">AUD</option>
                                <option value="CAD">CAD</option>
                                <option value="CNY">CNY</option>
                            </select>
                    </div>

                    <div className=" relative h-[100%] w-[70%] ml-2 dark:border-white border-gray-900 border-3 dark:text-white text-gray-800 rounded-r-xl ">
                    <input 
                        className=" relative h-[100%] w-[100%] text-3xl ml-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] outline-none"
                        type="number" value={inputAmount} 
                        onChange={changeInputValue} />
                        
                    </div>
                </div>



                <div className=" lg:m-[auto] my-10 mx-[auto]  h-14 w-20 flex items-center justify-center lg:text-5xl dark:text-white text-gray-800 rotate-90 lg:rotate-0 text-3 xl"><FaArrowRightArrowLeft /></div>


                <div className=" w-64 h-22 gap-2 flex relative mx-[auto] ">

                    <div className="dark:bg-white dark:text-black  rounded-l-xl border-gray-900 border-3 dark:border-none  relative h-[100%] w-[90%] flex items-center justify-center text-2xl  "> {convertedAmount} </div >

                    <div className="dark:bg-white bg-gray-900 relative lg:h-[100%] lg:w-[50%] w-30  rounded-r-xl">
                            <select 
                                className="dark:text-black text-white dark:bg-white bg-black relative outline-none h-[100%] w-[80%] text-xl ml-1 p-2  "
                                value={toCurrency}
                                onChange={(e) =>{ 
                                    setToCurrency(e.target.value)
                                }}> 
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="JPY">JPY</option>
                                <option value="AUD">AUD</option>
                                <option value="CAD">CAD</option>
                                <option value="CNY">CNY</option>
                            </select>

                    </div>
                    
                </div>


        
            </div> 
            </div>         
        </>
    )
}

export default Home