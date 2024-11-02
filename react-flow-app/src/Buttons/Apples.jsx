import { useState } from "react";

function Apples(){
    const [apples, setApples] = useState(0);
    return(
        <>
        <h2 style={{color:'crimson'}}>Number of Apples: {apples}</h2>
        {
            apples===0 ?
            <p style={{color:'grey'}}>No Apples</p>:
            <p style={{color:'gainsboro'}}>Great! you have some apples</p>
        }
        <button onClick={()=>setApples(apples+1)}>Add Apple</button>
        <button onClick={()=>apples>0 && setApples(apples-1)}>Remove Apple</button>
        <button onClick={()=>setApples(0)}>Reset</button>
        </>
    )
}
export default Apples;