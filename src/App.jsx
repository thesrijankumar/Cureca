import React, { useEffect, useState } from "react"
import { Outlet } from 'react-router'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App () {
    return(
        <>
         {/* currently it's a one page web, doing this incase of future scaling */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App