import React from 'react'
import {Input as In} from 'antd'

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
    rows?: number
}

const {TextArea} = In

const InputArea = (props: Props) => {
  return (
    <TextArea 
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`rounded-[8px] h-[40px] px-3 py-2 ${props.className}`}
        name={props.name}
        id={props.id}
        disabled={props.disabled}
        required={props.required}
        readOnly={props.readOnly}
        rows={props.rows}
        // width={props.width || "100%"}
    />
  )
}

export default InputArea