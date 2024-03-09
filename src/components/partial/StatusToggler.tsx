import { Switch } from 'antd'
import React, { useState } from 'react'

type Props = {}

const StatusToggler = (props: Props) => {

    const [status, setStatus] = useState(true)
  return (
    <div className='rounded-full px-3 p-1 flex items-center text-[14px] gap-1 border border-gray-400 transform transform-all bg-[white]'>
        <div className={`${status?'bg-primary':'bg-error'} h-[10px] w-[10px] rounded-full`}>
        </div>
        {
            status?"Open":"Closed"
        }
        <Switch checked={status} onChange={e=>setStatus(e)} size='small' style={{width:'24px', background:status?'#03A790':'#F21E1E', transform:'all 1s ease-in'}}/>
    </div>
  )
}

export default StatusToggler