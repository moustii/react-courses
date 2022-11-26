import React, {Component} from "react";
import Livre from "./Livre/Livre";

class Livres extends Component {

    state = {
        livres: [
            {id: 1, titre: "L'algorithmique selon H2PROG", auteur: "Matthier GASTON", pages: 200},
            {id: 2, titre: "La France du 19ème", auteur: "Albert PATRICK", pages: 500},
            {id: 3, titre: "Le monde des animaux", auteur: "Marc MERLIN", pages: 250},
            {id: 4, titre: "Le Virus d'Asie", auteur: "Tya MILO", pages: 120}
        ]
    };

    handleDeleteLivre = (id) => {
        const numIndexLivre = this.state.livres.findIndex(el => {
            return el.id === id
        });

        const livresCopy = [...this.state.livres];
        livresCopy.splice(numIndexLivre, 1);

        this.setState({livres: livresCopy});

    }


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
                        {
                            this.state.livres.map((livre) => {
                                return (
                                    <tr key={livre.id}>
                                        <Livre 
                                            titre={livre.titre} 
                                            auteur={livre.auteur} 
                                            pages={livre.pages}
                                            delete={() => this.handleDeleteLivre(livre.id)} 
                                        />
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