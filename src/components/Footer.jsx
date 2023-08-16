import React from "react";

function Footer () {
    return(
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="#">Contact me</a> | <a href="#">About the author</a>
                        </div>
                        <div className="col-md-6 text-end">
                            <span>Copyright @ 2023. All rights reserved. </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;