import React from 'react'
import icon from '../../assets/Input/icon/icon.svg'

interface Props {
  placeholder: string
  type: string
  name: string
}

const Input = ({ type, placeholder, name }: Props): JSX.Element => {
  return (
    <div className="w-full relative flex">
      <input
        type={type}
        name={name}
        className="h-9 rounded-md text-[#535353] placeholder:text-[#535353] pl-2 w-full"
        placeholder={placeholder}
      />
      {type === 'password' ? (
        <div className="absolute items-center justify-end h-9 flex w-full">
          <img src={icon} alt="" className="mr-2" />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
