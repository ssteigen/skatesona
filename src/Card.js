import React from "react";

const Card = ({ className = null, children }) => (
    <div className={`card m-10 bg-base-100 shadow-xl ${className}`}>
        <div className="card-body">
            {children}
        </div>
    </div>
)

export default Card;