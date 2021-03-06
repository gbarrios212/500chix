import React from 'react';

class Footer extends React.Component {

    render(){
        return (
            <div className="footer-container-outer">
                <div className="footer-container-inner">
                    <div>Created by Gabriel Barrios</div>
                    <a href="https://github.com/gbarrios212" className="devLink"><i className="fab fa-github devLink"> </i>  GitHub</a>
                    <a href="https://www.linkedin.com/in/gabriel-antonio-barrios" className="devLink"><i className="fab fa-linkedin devLink"> </i>  LinkedIn</a>
                    <a href="https://angel.co/gabriel-barrios-2" className="devLink"><i className="fab fa-angellist devLink"></i>    AngelList</a>
                    <a href="https://gbarrios.com/" className="devLink2"><div className="portfolio-logo"></div>Portfolio</a>
                </div>
            </div>
    )
}

}

export default Footer;