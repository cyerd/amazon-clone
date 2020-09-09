import React from "react";
import "./subtotal.css";
import CurrecyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrecyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( 0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"Ksh"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
