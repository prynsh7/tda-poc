import React from 'react'
import {Select as Sel} from 'antd'

type Props = {
    value?: string;
    onChange?: (e: any) => void
    placeholder?: string
    className?: string
    type?: string
    name?: string
    id?: string
    disabled?: boolean
    required?: boolean
    readOnly?: boolean
    height?: number
    width?: string
    options?: any
}

const Select = (props: Props) => {
  return (
    <Sel
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`rounded-[8px] h-[40px] ${props.className}`}
        id={props.id}
        disabled={props.disabled}
        options={props.options}
        style={{width:"100%"}}
    />
  )
}

export default Select