import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axi() {

    const [data, setData] = useState()
    useEffect(() => {
        axios.get("https://service.apikeeda.com/api/v1/hotel", {

            headers: {
                "x-apikeeda-key": "g1722224667037qgn88214001yp"
            }
        })
        .then((s)=>{
            setData(s.data);
            console.log(s.data.data);
        })
        .catch((s)=>{
            console.log(s);
        })
    }, [])
    return (
        <>

        </>
    )
}

export default Axi
