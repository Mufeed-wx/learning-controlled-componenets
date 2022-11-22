import React, { Component } from 'react'

export default class DemmiData extends Component {
    componentDidMount() {
        console.log('didmount', this.props.name);
    }
    componentWillUnmount() {
        console.log('will un mount', this.props.name);
    }
    render() {

        return (
            <div>hello {this.props.name}</div>
        )
    }
}
