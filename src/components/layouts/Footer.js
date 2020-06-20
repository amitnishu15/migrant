import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>About Site</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" onClick={() => alert('Work in Progress....Coming Soon!')}>Terms and Conditions</a></li>
                            <li><a href="#" onClick={() => alert('Work in Progress....Coming Soon!')}>Privacy Policy</a></li>
                            <li>Good Morning</li>
                            <li>Good Morning</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Good</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" onClick={() => alert('Work in Progress....Coming Soon!')}>Career</a></li>
                            <li><a href="#" onClick={() => alert('Work in Progress....Coming Soon!')}>Volunteer</a></li>
                            <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Good</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Good</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                            <li><a href="/">Good Morning</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        Have a nice day
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);   
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}
`;