import React from "react";

export default function Item(payload) {
  return (
    <div className="faqItem">
      <h3>{payload.question}</h3>
      <p>{payload.answer}</p>
    </div>
  )
}
