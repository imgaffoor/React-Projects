import { useState } from "react";

function INCdec(){
    const [count,setCount] = useState(0);
    return(
        <>
        <h2 style={{color:'thistle'}}>The Count Balance: {count}</h2>
        <button style={{color:'green'}} onClick={()=>setCount(count+1)}>Increment</button>
        <button style={{color:'red'}} onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export default INCdec;