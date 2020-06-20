import React from 'react'

function SubNavbar() {
    const subNab = {
        background: 'gainsboro'
    }
    return (
        <div className="col">
            <div style={subNab} className="justify-content-center row">
                <a className="nav-link" href="https://infographics.channelnewsasia.com/covid-19/map.html" target="_blank">Covid-19</a>
                <div className="dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" target="_blank" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div className="dropdown-menu sm-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" onClick={() => alert('Work in Progress....Coming Soon!')}>Salon at Home</a>
                        <a className="dropdown-item" href="#">Electrician</a>
                        <a className="dropdown-item" href="#">Carpenter</a>
                    </div>
                </div>
                {/* <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" target="_blank">Services</a>
                <div className="dropdown-menu sm-menu">
                    <a className="dropdown-item" href="#">Salon at Home</a>
                    <a className="dropdown-item" href="#">Electrician</a>
                    <a className="dropdown-item" href="#">Carpenter</a>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> */}
                <a className="nav-link" href="#">Reports</a>
            </div>
        </div>
    )
}

export default SubNavbar;
