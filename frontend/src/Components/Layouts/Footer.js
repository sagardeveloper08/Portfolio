import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <p><i className="fa fa-copyright" />{new Date().getFullYear()} <a href="/" target="_blank">Sagar Singh</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="go-top"><i className="fa fa-angle-up" /></div>
        </Fragment>
    )
}

export default Footer