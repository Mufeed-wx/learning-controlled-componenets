import { React, useState,useEffect } from 'react'
import './Usage.css'

const Usage = () => {
    const [value, setValue] = useState(0)
    const [color, setColor] = useState('white')
    const [boom, setBoom] = useState(false)
    useEffect(() => {
        setBoom(false)
        const id=setTimeout(() => {
            setBoom(true)
        }, value * 1000);
        return () => {
            clearTimeout(id)
        }
    },[value])
    return (
        <div>
            <div className='usage'>
                <div className="usage-item" style={{ background: color }}>
                    <button onClick={() => {
                        setValue(value + 1)
                    }}>Incriment</button>
                    <label>{value}</label>
                    <button onClick={() => {
                        setValue(value - 1)
                    }}>Decriment</button>
                    <div>
                        <button
                            style={{
                                borderRadius: '15px',
                                background: "green"
                            }}
                            onClick={() => {
                                setColor('green')
                            }}>G</button>
                        <button
                            style={{
                                borderRadius: '15px',
                                background: "blue",
                                margin: "10px 10px"
                            }}
                            onClick={() => {
                                setColor('blue')
                            }}>B</button>
                    </div>
                </div>
            </div>
            {boom && value ? (
                <div className='boom'>
                <span>🌟</span>
                </div>
            ) : null
            }
        </div>
    )
}

export default Usage