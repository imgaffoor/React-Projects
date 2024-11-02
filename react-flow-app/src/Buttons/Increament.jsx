import { useState } from "react";

function Increament(){
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1);
    }
    return(
        <>
        <h2 style={{color:'salmon'}}>The Counter Value is: {count}</h2>
        <button onClick={handleClick}>Increament</button>
        </>
    );
}
export default Increament;