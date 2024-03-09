import React, { useState } from 'react'

type Props = {
    filters:String[]
}

const FilterTabs = (props: Props) => {
    

    const [selected, setSelected] = useState(0)
  return (
    <div>

    <div className='p-1 rounded-[8px] bg-[white] h-auto'>
        <div className='flex gap-2 overflow-x-auto'>
            {
                props.filters.map((filter, index)=>(
                    <div key={index} onClick={()=>setSelected(index)} className={`px-3 py-1.5 text-[14px] cursor-pointer ${index==selected?"rounded-[6px] text-black_500 bg-border_light":"text-gray-500 bg-transparent"}`}>
                        {filter}
                    </div>
                ))
            }
        </div>
    </div>
            </div>
  )
}

export default FilterTabs