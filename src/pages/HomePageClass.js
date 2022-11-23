import React from 'react'
import Tools from '../componenets/Tools'
import SimpleList from '../componenets/List';

import {
    MyContext,
    MyNewContext
} from './MyContext'
import JustInfo from './JustInfo';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],   
            activeState: 'all',
            message: "",
            showlabel: true,
        }
    }
    onListChange(e) {
        const value = e.target.value
        this.setState({
            activeState: value
        })
    }
    componentDidMount() {
        fetch('./data.json')
            .then((data => {
                return data.json();
            }))
            .then((data => {
                this.setState({
                    data: data
                })
            }))
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('updated');
        console.log(this.state.message);
        if (prevState.message !== this.state.message) {
            console.log('message updated');
            this.setState({
                message: "hai"
            })
        }
    }
    onDelete = (item) => {
        const newItem = this.state.data.filter((data) => data.id !== item.id)
        this.setState({
            data: newItem
        })
    }
    onLabelClick = (status) => {
        this.setState({
            activeState: status
        })
    }
    showChange = (evt) => {
        this.setState({
            showlabel: evt.target.checked
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
            <>
                <div style={{ padding: "20px 100px 0px 100px" }}>
                    <input onChange={this.showChange} checked={this.state.showlabel} type="checkbox" ></input> Show label
                </div>
                <MyNewContext.Provider value={'100'}>
                    <MyContext.Provider value={this.state.showlabel}>
                        <Tools count={count} labelStatus={activeState} onListChange={this.onListChange.bind(this)}>
                            <SimpleList items={newlist} onLabelClick={this.onLabelClick} onAction={this.onDelete} />
                        </Tools>
                    </MyContext.Provider>
                </MyNewContext.Provider>
                <JustInfo activeState={activeState} />
            </>
        )
    }
}
export default HomePage
