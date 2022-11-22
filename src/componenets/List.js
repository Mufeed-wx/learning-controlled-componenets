import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css'

class List extends React.Component {
    render() {
        console.log('render');
        const {desc, title, IsActive,onDelete ,onLabelClick} = this.props
        const style = IsActive ?  {backgroundColor:'blue'}  :  {backgroundColor:'red'}
        return (
            <div className='ListItems border border-primary'>
                <div className='list-title'>
                    <h4>{title}</h4>
                    <label onClick={onDelete}>Delete</label>
                </div>
                <div>
                    <p>{ desc}</p>
                </div>
                <div>
                    <span
                        onClick={() => {
                            onLabelClick(IsActive?'active':'non-active')
                        }}
                        style={style} className='status'>{IsActive ? "Active" : "Non Active"}</span>
                </div>
            </div>
        )
    }
}
export default List