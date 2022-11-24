import React, { useContext ,useState} from 'react'
import './Label.css'
import {
    MyContext,
    MyNewContext
} from '../pages/MyContext'

const Label = (props) => {
    const [showToolTip, setToolTip] = useState(false)
    const val = useContext(MyContext)
    const { onLabelClick, IsActive, style } = props
    if (val === false) {
        return null;
    }
    const handelMouseEnter = (() => {
        setToolTip(true)
    })
    const handelMouseLeave = (() => {
        setToolTip(false)
    })
    return (
        <div>
            <span
                
                onClick={() => {
                    onLabelClick(IsActive ? 'active' : 'non-active')
                }}
                style={style} className='status'
            >{IsActive ? "Active" : "Non Active"}</span>
            {/* <label className={'tooltip ${showToolTip?"show-tooltip":"hide-tooltip"}'}>
                This is {IsActive ? "Active" : "Non Active"} tooltip
            </label> */}
        </div>
    )
}

export default Label