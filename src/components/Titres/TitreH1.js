import React from "react";
import classes from "./TitreH1.module.css";

const TitreH1 = (props) => {
    const monCss = `border border-dark p-2 m-2 bg-primary rounded text-center text-white ${classes.titreH1}`;
    return (
        <h1 className={monCss}>{props.children}</h1>
    );
}


export default TitreH1;

