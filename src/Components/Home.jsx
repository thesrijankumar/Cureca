import axios from "axios";
import React, { useEffect, useState } from "react";

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
        <div className="mt-[7%] justify-center flex align-center">        
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
                            <option value="NPR">NPR</option>
                        </select>
                    </div>
                    <div id="input-amount-here" className="border rounded-xl">
                        <input 
                        className="h-30 w-60 text-center text-3xl"
                        type="text" value={inputAmount} 
                        onChange={changeInputValue} />
                    </div>
                </div>

                <div className="m-[auto]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" color="#000000" fill="none">
                        <path d="M14 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

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
                                <option value="NPR">NPR</option>
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