import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css'
// import Label from './Label';
import Label2 from './Label2';

class List extends React.Component {
    render() {
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
                    {/* <Label onLabelClick={onLabelClick} IsActive={IsActive} style={style} /> */}
                    <Label2 onLabelClick={onLabelClick} IsActive={IsActive} style={style}/>
                </div>
            </div>
        )
    }
}
export default List