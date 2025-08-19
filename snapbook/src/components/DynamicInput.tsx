import React from 'react'
import { Input } from "../../type";
const DynamicInput = ({data} : {data : Input[]}) => {
  return (
    <>
        {data.map((input, index) => (
            <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            className={input.className}
            required={input.required}
            value={input.value}
            />
        ))}
    </>
  )
}

export default DynamicInput