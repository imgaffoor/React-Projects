import { useState } from "react";

function Discount(){
    const [price] = useState(1789);
    const [discount, setDiscount] = useState(0);
    const dis = price - price*(discount/100);
    const maxDiscountReached = discount >= 70;
    return(
        <>
        <h1>Original Price: ${price}</h1>
        <h2>Discounted Price: ${dis.toFixed(2)}</h2>
        <h2>Applied Discount: {discount}%</h2>
        <p style={{color:'gray'}}>Click a button to apply discount</p>
        <button onClick={() => discount<70 && setDiscount(discount+10)} disabled={maxDiscountReached}>
            Apply 10% Discount
        </button>
        <button onClick={() => discount<60 && setDiscount(discount+20)} disabled={maxDiscountReached}>
            Apply 20% Discount
        </button>
        <button onClick={() => discount<50 && setDiscount(discount+30)} disabled={maxDiscountReached}>
            Apply 30% Discount
        </button>
        <button onClick={() => setDiscount(0)}>
            Reset
        </button>
        {maxDiscountReached && <p style={{color:'red'}}>Max discount reached!</p>}
        </>
    )
}
export default Discount;