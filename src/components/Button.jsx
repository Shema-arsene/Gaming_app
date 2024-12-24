import React from "react"

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} hover:scale-110 duration-300`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general  text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
