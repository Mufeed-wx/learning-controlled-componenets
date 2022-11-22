import React, { useContext } from 'react'
import { MyContext } from '../pages/HomePage'

const Label = (props) => {
    const val =useContext(MyContext)
    const { onLabelClick, IsActive, style } = props
    if (val === false) {
        return null;
    }
    return (
        <div>
            <span
                onClick={() => {
                    onLabelClick(IsActive ? 'active' : 'non-active')
                }}
                style={style} className='status'>{IsActive ? "Active" : "Non Active"}</span>
        </div>
    )
}

export default Label