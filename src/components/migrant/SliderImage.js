import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

class SliderImage extends Component {
    render() {
        const images = [
            { url: "images/migrant2.jpg" },
            { url: "images/migrant3.jpg" },
            { url: "images/migrant5.jpg" },
            { url: "images/migrant6.jpg" },
            { url: "images/migrant8.jpg" },
            { url: "images/migrant7.jpeg" },
            // { url: "images/7.jpg" },
        ];
        return (
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="card">
                    <SimpleImageSlider
                        width="100%"
                        height={504}
                        images={images}
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderImage;