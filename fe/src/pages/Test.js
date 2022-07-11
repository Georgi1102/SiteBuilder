import React, { useState, useEffect } from 'react'

export default function Test() {
    const [gavra, setGavra] = useState(0)

    const increaseGavra = () => {
        setGavra(gavra + 1)
    }

    useEffect(() => {
        console.log(gavra);
    },[gavra])

    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <p className='text-3xl text-red-800'>{gavra}</p>
            <button onClick={() => increaseGavra()}>IZGAVRI SE S MEN</button>
        </div>
    )
}