import React from 'react'
import { CommonContext } from './CommonContext'

class Footer extends React.Component {
    render() {

        return (
            <CommonContext.Consumer>
                {
                    ({ color }) => (
                        <h1 className='footer' style={{ backgroundColor: color }}>Footer Page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Footer