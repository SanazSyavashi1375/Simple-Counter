import React, { useState } from 'react'
let SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    return ( <
        >
        <
        h1 className = {
            (counter > 5 ? 'numContainer , backGroundBlue' : 'numContainer , backGroundYellow') } > { counter } < /h1> <
        div >
        <
        button onClick = {
            () => setCounter(prevState => prevState + 1) } > increment < /button> <
        button onClick = {
            () => setCounter(prevState => prevState - 1) } > decrement < /button> <
        /div> <
        />
    )
}
export default SimpleCounter;