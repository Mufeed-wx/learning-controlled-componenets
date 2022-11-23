import { useState, useEffect, useMemo } from "react"
import React from 'react'
import Tools from '../componenets/Tools'
import SimpleList from '../componenets/List';
import {
    MyContext,
    MyNewContext
} from './MyContext'
import JustInfo from './JustInfo';

const HomePageFun = () => {
    const [data, setData] = useState([])
    const [activeState, setActiveState] = useState('all')
    const [showlabel, setShowLabel] = useState(true)

    useEffect(() => {
        fetch('/data.json')
            .then((data => {
                return data.json();
            }))
            .then((data => {
                setData(data)
            }))
    },[])
    const onListChange = (e) => {
        const value = e.target.value
        setActiveState(value)
    }

   const onDelete = (item) => {
        const newItem = data.filter((data) => data.id !== item.id)
        setData(newItem)
    }
   const onLabelClick = (status) => {
        setActiveState(status)
    }
   const showChange = (evt) => {
        setShowLabel(evt.target.checked)
    }

    const newlist = data.filter((data) => {
        if (activeState === 'all') {
            return true;
        }
        if (activeState === 'active') {
            return data.IsActive === true
        }
        if (activeState === 'non-active') {
            return data.IsActive === false
        }
        return false
    })

    // Example of useMemo using varriables
    const Memovalue = useMemo(() => {
        return {
            key: "value",
            activeState:activeState
        }
    }, [activeState])

    //Example useMemo Using funaction
    const memoFunction = useMemo(() => { 
        return (() => {
            console.log('clicked memo function',activeState);
        })
    }, [activeState])
    

    const count = newlist.length
    return (
        <>
            <div style={{ padding: "20px 100px 0px 100px" }}>
                <input onChange={showChange} checked={showlabel} type="checkbox" ></input> Show label
            </div>
            <MyNewContext.Provider value={'100'}>
                <MyContext.Provider value={showlabel}>
                    <Tools count={count} labelStatus={activeState} onListChange={onListChange.bind(this)}>
                        <SimpleList items={newlist} onLabelClick={onLabelClick} onAction={onDelete} />
                    </Tools>
                </MyContext.Provider>
            </MyNewContext.Provider>
            {/* example of using useMemo */}
            <JustInfo onClick={memoFunction}  showlabel={showlabel} /> 
        </>
    )
}

export default HomePageFun