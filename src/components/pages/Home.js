import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import SliderImage from '../migrant/SliderImage';
import SliderImage2 from '../migrant/SliderImage2';
import MarqueeLine2 from '../migrant/MarqueeLine2'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <MarqueeLine2 />
                {/* <SliderImage /> */}
                <SliderImage2 />
                <div className="row mt-3">
                <InfoConsumer>
                {value => {
                    return value.info.map(item => {
                        return <Info key={item.id} item={item} />;
                    })
                }}
            </InfoConsumer>
                </div>
            </div>
        )
    }
}
 
export default Home;