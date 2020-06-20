import React, { Component } from 'react'

const MyContext = React.createContext()

class ContextApiC extends Component {
    static contextType = MyContext
    render() {
        const Coder3 = () => {
            return (
                <MyContext.Consumer>
                    {
                        (data) => {
                            return (
                                <React.Fragment>
                                    <h1>myname is {data.name}</h1>
                                    <h1>myname is {data.name}</h1>
                                </React.Fragment>

                            )
                        }
                    }
                </MyContext.Consumer>
            )
        }
        const Coder2 = () => {
            return (
                <div>
                    <MyContext.Consumer>
                        {
                            (data) => {
                                return (
                                    <React.Fragment>
                                        <h1>myname is {data.name}</h1>
                                        <h1>myname is {data.name}</h1>
                                    </React.Fragment>
                                )
                            }
                        }
                    </MyContext.Consumer>
                    <Coder3 />
                </div>
            )
        }
        const Coder = () => {
            return <Coder2 />
        }
        return (
            <div>
                Class component
                <MyContext.Provider value={{ name: "Amit", age: 27 }}>
                    <Coder />
                </MyContext.Provider>
            </div>
        )
        
    }
}

export default ContextApiC;
