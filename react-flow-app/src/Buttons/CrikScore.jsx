import { useState } from "react";

function CrikScore(){
    const [score,setScore] = useState(0);
    return(
        <>
        <h2 style={{color:'greenyellow'}}>Score: {score}</h2>
        <button onClick={()=>setScore(score+1)}>+1</button>
        <button onClick={()=>setScore(score+2)}>+2</button>
        <button onClick={()=>setScore(score+3)}>+3</button>
        <button onClick={()=>setScore(score+4)}>+4</button>
        <button onClick={()=>setScore(score+6)}>+6</button>
        </>
    )
}
export default CrikScore;