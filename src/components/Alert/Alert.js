import React from "react";

const Alert = (props) => {
    const alertCss = `alert ${props.type}`;
    return (
        <div class={alertCss} role="alert">
            {props.children}
        </div>
    )
    
};

export default Alert;