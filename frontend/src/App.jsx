import React, { useEffect, useState } from "react"
import axios from "axios"

function App () {

    const [messege, setMessege] = useState("")

    useEffect(() => {
        axios.get('/api/')
        .then((res) => {
            setMessege(res.data)
        })
    })

    return(
        <>
            <div>
                <h1 className="text-3xl">Greetings! Supreme</h1>
                <h1>{messege}</h1>
            </div>
        </>
    )
}

export default App