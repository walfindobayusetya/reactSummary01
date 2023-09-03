import React from "react";
import { PriceContext, ItemContext } from "../App";

export default function ComponentZ() {
  return (
    <div>
      <PriceContext.Consumer>
        {(price) => {
          return <ItemContext.Consumer>{
                (item)=>{
                    return (
                      <div>
                        Price contest: {price} - item contest: {item}
                      </div>
                    );
                }
            }</ItemContext.Consumer>;
        }}
      </PriceContext.Consumer>
    </div>
  );
}
