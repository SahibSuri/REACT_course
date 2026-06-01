import { useState } from 'react'
import './Counter.css'
export default function Counter(){
    let [count , setCount] = useState(0)
    console.log("component is rendered")
    console.log(count)
    function incCount(){
        setCount(count+1)    // not a good way to write but still
        // count += 1
        console.log(`inside incCount() count = ${count}`)

    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button className="inc" onClick={incCount} >Increase Count</button>
        </div>
    )

}


// useState() is a react hook that lets you add a state variable to your component