import React from 'react'
import { CommonContext } from './CommonContext';

class UsrMain extends React.Component {

    render() {
        return (
            <CommonContext.Consumer>
                {
                    ({ color, updateColor }) => (
                        <div>
                            <h1 style={{ backgroundColor: color }}>Hello, this is main page</h1>
                            <button onClick={updateColor}>
                                Change Color
                            </button>
                        </div>
                    )
                }
            </CommonContext.Consumer>
        );
    }
}

export default UsrMain
