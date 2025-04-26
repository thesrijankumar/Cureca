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
        <div className="flex mt-[7%] justify-center flex align-center">        
            <div id="main-box" className="text-white m-3 w-[80%] align-center justify-center p-6 flex border rounded-2xl">

                <div id="from-box">
                    <div id="currency-selector-here" className="flex border mb-4 justify-center mx-[auto] rounded-2xl w-[60%]">
                        <select 
                            className="text-black h-20 w-30 text-center text-xl"
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
                    <div id="input-amount-here" className="border rounded-xl">
                        <input 
                        className="h-30 w-60 text-center text-3xl"
                        type="text" value={inputAmount} 
                        onChange={changeInputValue} />
                    </div>
                </div>


                <div className=" m-[auto] text-5xl"><FaArrowRightArrowLeft /></div>


                <div id="to-box">
                    <div id="currency-selector-here">
                        <div id="currency-selector-here">
                            <select 
                                className="text-black h-20 w-60 text-center text-xl"
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
                    <div id="output-amount-here" className="text-3xl mt-4 text-center">
                        {convertedAmount && <p>{convertedAmount} {toCurrency}</p>}
                    </div>
                </div>
            </div> 
            </div>         
        </>
    )
}

export default Home