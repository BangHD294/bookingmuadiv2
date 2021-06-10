import React from "react";

const Logobar = () =>{
    return(
        <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets\images\logomini.png" alt="" height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets\images\logomini.png" alt="" height={17} />
          </span>
        </a>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets\images\logo-light.svg" alt="" height={22} />
          </span>
          <span className="logo-lg">
            <img src="assets\images\logomini.png" alt="" height={19} />
          </span>
        </a>
      </div>
    );
}
export default Logobar;