import React from "react";
import Button from "../../../components/Button/Button";

const Livre = (props) => {
    return (
        <>
            <td>{props.titre}</td>
            <td>{props.auteur}</td>
            <td>{props.pages}</td> 
            <td>
                <Button 
                    typeBtn="btn-danger" 
                    click={() => console.log("updating")}
                />
            </td>
            <td>
                <Button 
                    typeBtn="btn-warning" 
                    click={props.delete} 
                />
            </td> 
        </>
    );
}

export default Livre;