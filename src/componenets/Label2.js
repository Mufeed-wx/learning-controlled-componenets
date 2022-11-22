import React, { Component } from 'react'
import { MyContext,MyNewContext } from '../pages/MyContext'

export default class Label2 extends Component {
    render() {
        const { onLabelClick, IsActive, style } = this.props
        console.log(this.context)
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (value) => {
                            if (value === false) {
                                return null;
                            }
                            return (
                                <span
                                    onClick={() => {
                                        onLabelClick(IsActive ? 'active' : 'non-active')
                                    }}
                                    style={style} className='status'>{IsActive ? "Active" : "Non Active"}</span>
                            )
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
Label2.contextType = MyNewContext;
// Another method is Static contextType =MyNewContext