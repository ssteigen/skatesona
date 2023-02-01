import React from "react";

const Header = ({ className = null }) => (
    <div className={`navbar ${className}`}>
        <a className="btn btn-ghost normal-case text-xl">Skatesona</a>
    </div>
)

export default Header;