import React from "react";

const Button = (props) => {

    let btnCss = `btn ${props.typeBtn} ${props.css}`;
    // let txt = '';
    // switch (props.typeBtn) {
    //     case 'btn-success': 
    //         txt = 'ajouter';
    //         btnCss += ` w-100`;  
    //         break;
    //     case 'btn-danger': txt = 'modification';
    //         break;
    //     case 'btn-warning': txt = 'suppression';
    //         break;
    //     default: console.log('wrong data');
    // }

    return (
        <button className={btnCss} onClick={props.click}>{props.children}</button>
    );

}

export default Button;