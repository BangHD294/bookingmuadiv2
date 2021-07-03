import React from "react";

const LanguageMD = () => {
    return (
        <div>
            <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className src="assets\images\flags\us.jpg" alt="Header Language" height={16} />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                {/* item*/}
                <a href="# " className="dropdown-item notify-item">
                    <img src="assets\images\flags\spain.jpg" alt="img" className="mr-1" height={12} />
                    <span className="align-middle">Spanish</span>
                </a>
                {/* item*/}
                <a href="# " className="dropdown-item notify-item">
                    <img src="assets\images\flags\germany.jpg" alt="img1" className="mr-1" height={12} />
                    <span className="align-middle">German</span>
                </a>
                {/* item*/}
                <a href="# " className="dropdown-item notify-item">
                    <img src="assets\images\flags\italy.jpg" alt="img2" className="mr-1" height={12} />
                    <span className="align-middle">Italian</span>
                </a>
                {/* item*/}
                <a href="# " className="dropdown-item notify-item">
                    <img src="assets\images\flags\russia.jpg" alt="img3" className="mr-1" height={12} />
                    <span className="align-middle">Russian</span>
                </a>
            </div>
        </div>
    );
}
export default LanguageMD;
