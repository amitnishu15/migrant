import React, { Component } from 'react'

class RefUseRef extends Component {
    myHeading = React.createRef();
    myinput = React.createRef();
    componentDidMount() {
        this.myinput.current.focus()
    }
    render() {
        return (
            <div>
                <h3 ref={this.myHeading}>Ref and UseRef</h3>
                <input type="text" ref={this.myinput} />
            </div>
        )
    }
}

export default RefUseRef;