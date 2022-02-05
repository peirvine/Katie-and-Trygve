import React from "react";

import "./Split.scss"

export default function Split(payload) {
  return (
    <div className="Split">
      <div className="splitLeft">
        {payload.left && (<h2> {payload.left} </h2>)}
      </div>
      <div className="splitRight">
        {payload.right && (<h2> {payload.right} </h2>)}
      </div>
    </div>
  )
}