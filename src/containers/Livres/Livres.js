import React, {Component} from "react";
import Livre from "./Livre/Livre";
import FormAjout from "./FormAJout/FormAjout";

class Livres extends Component {

    state = {
        livres: [
            {id: 1, titre: "L'algorithmique selon H2PROG", auteur: "Matthier GASTON", pages: 200},
            {id: 2, titre: "La France du 19ème", auteur: "Albert PATRICK", pages: 500},
            {id: 3, titre: "Le monde des animaux", auteur: "Marc MERLIN", pages: 250},
            {id: 4, titre: "Le Virus d'Asie", auteur: "Tya MILO", pages: 120}
        ], 
        lastId: 4
    };

    handleDeleteLivre = (id) => {
        const numIndexLivre = this.state.livres.findIndex(el => {
            return el.id === id
        });

        const livresCopy = [...this.state.livres];
        livresCopy.splice(numIndexLivre, 1);
        
        this.setState({livres: livresCopy});
    }
    
    handleAjoutLivre = (titre, auteur, nbPages) => {
        // const lastId = (this.state.livres.slice().pop().id);
        // this.setState({lastId: lastId})
        const newLivre = {
            id: this.state.lastId + 1,
            titre: titre,
            auteur: auteur,
            pages: nbPages
        };
        const livresCopy = [...this.state.livres];
        livresCopy.push(newLivre);
        this.setState(oldState => {
            return {
                livres: livresCopy,
                lastId: oldState.lastId + 1
            }
        });
    }


    render() {
        // const isAjoutTrue = this.props.ajoutLivre;

        return (
            <>
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
                {
                    //isAjoutTrue ? <FormAjout/> : '' 
                    // si c'est vrai alors (&&) fait ça :
                    this.props.ajoutLivre && <FormAjout ajoutLivre={this.handleAjoutLivre}/>
                }
            </>
        );
    }


}

export default Livres;