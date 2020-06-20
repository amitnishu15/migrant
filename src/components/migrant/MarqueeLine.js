import React from 'react'
import Marquee from 'react-marquee-line'

function MarqueeLine() {
    const someReactElemYouCanClick = <span>
        <a href="https://codesandbox.io">Click me </a> for more details
    </span>

    // set a list your want it to run
    const list = [
        'the 1st running item',
        someReactElemYouCanClick,
        'the 2rd running item'
    ]
    return (
        <div>
            Amit
            <Marquee list={list} />
        </div>
    )
}

export default MarqueeLine;