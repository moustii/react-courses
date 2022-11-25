import React, {Component} from "react";
import Button from "../../components/Button/Button";

class Livres extends Component {

    state = {
        livres: [
            {id: 1, titre: "L'algorithmique selon H2PROG", auteur: "Matthier GASTON", pages: 200},
            {id: 2, titre: "La France du 19ème", auteur: "Albert PATRICK", pages: 500},
            {id: 3, titre: "Le monde des animaux", auteur: "Marc MERLIN", pages: 250},
            {id: 4, titre: "Le Virus d'Asie", auteur: "Tya MILO", pages: 120}
        ]
    };
    



    render() {
        return (
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de pages</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {/* <td>{this.state.livres[0].titre}</td>
                        <td>auteur 1</td>
                        <td>X pages</td>
                        <td><Button typeBtn="btn-danger" click={() => console.log("updating")}/></td>
                        <td><Button typeBtn="btn-warning" click={() => console.log("deleted")}/></td> */}
                        {
                            this.state.livres.map((livre) => {
                                return (
                                    <tr key={livre.id}>
                                        <td>{livre.titre}</td>
                                        <td>{livre.auteur}</td>
                                        <td>{livre.pages}</td>
                                        <td>
                                            <Button 
                                                typeBtn="btn-danger" 
                                                click={() => console.log("updating")}
                                            />
                                        </td>
                                        <td>
                                            <Button 
                                                typeBtn="btn-warning" 
                                                click={() => console.log("deleted")} 
                                            />
                                        </td> 
                                    </tr>
                                );
                            })
                        }
                </tbody>
            </table>
        );
    }


}

export default Livres;