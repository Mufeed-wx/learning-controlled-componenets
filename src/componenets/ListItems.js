import React from 'react'
import Tools from './Tools';
import List from './List';
import SimpleList from './SimpleList';
let data = [
    {
        id: 1,
        title: "Appoint for October",
        des: 'The patient is rescheduled to October',
        IsActive: true
    },
    {
        id: 2,
        title: "Appoint for November",
        des: 'The patient is rescheduled to November',
        IsActive: false
    },
    {
        id: 3,
        title: "Appoint for December",
        des: 'The patient is rescheduled to December',
        IsActive: true
    },
    {
        title: "Appoint for January",
        des: 'The patient is rescheduled to January',
        IsActive: false
    },
]

class ListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            activeState: 'all'
        }
    }
    onListChange(e) {
        const value = e.target.value
        this.setState({
            activeState: value
        })
    }
    onDelete = (item) => {
        console.log('clicked', item);
        const newItem = this.state.data.filter((data) => data.id != item.id)
        this.setState({
            data: newItem
        })
    }
    onLabelClick = (status) => {
        this.setState({
            activeState: status
        })
    }
    render() {
        const { data, activeState } = this.state;
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
        const count = newlist.length
        return (
            <Tools count={count} labelStatus={activeState} onListChange={this.onListChange.bind(this)}>
                <SimpleList items={newlist} onLabelClick={this.onLabelClick} onAction={this.onDelete} />
            </Tools>
        )
    }
}

export default ListItems