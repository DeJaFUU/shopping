import React from "react";

import './costum-button.styles.scss'

const CostumButton = ({ children, ...otherProps}) => (
    <button className="costum-button" {...otherProps}>
        {children}
    </button>
)

export default CostumButton;