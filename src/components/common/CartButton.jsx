import * as styles from "./CartButton.css";
import { useState } from "react";

function CartButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className={styles.cartbtn} onClick={handleClick}>
        Add to Cart ({count})
      </button>
    </div>
  );
}

export default CartButton;













// / Dynamic Variable
// for (var i = 0; i <= 15; i++) {
// eval("var_"+ i +" = "+i);
// }
// console.log(var_3);
// console.log(var_9);
// console.log(var_11);
// console.log(var_15);

// const [loading, setLoadingl = useState (true);
// const [error, setError] = useState (false);



// // Pass by value
// let a = 10;
// let b = "Hi"
// // Pass by reference
// let c = [1, 2];
// let d = c

