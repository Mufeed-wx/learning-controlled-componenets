import React from 'react'

const style = {
    display: "inline-block",
    margin: "10px 0px"
}
const mainStyle = {
    padding: "0px 100px 100px 100px"
}
class Tools extends React.Component {
    render() {
        const { children, count, onListChange, labelStatus } = this.props
        // const onlychild = React.Children.only(children)
        // const count = React.Children.count(onlychild.props.children)
        return (
            <div className='list' style={mainStyle}>
                <div className='List-header'>
                    <select value={labelStatus} onChange={onListChange} name='status'>
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='non-active'>Non-Active</option>                    </select>
                </div>
                {children}
                <div className='list-footer border border-dark shadow p-2 mb-5 bg-white rounded ' style={style}>
                    count:{count}
                </div>
            </div>
        )
    }
}
export default Tools