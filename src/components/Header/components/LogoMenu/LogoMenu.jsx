import React, {useState} from "react";
import {Link} from "gatsby";
import logo from "../../../../images/logo.png";

export const LogoMenu = () => {
    return (
        <div>
            <Link to="#">
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}