import React, {Component} from 'react';
import Button from '../../../components/Button/Button';

class FormAjout extends Component {

    state = {
        titreSaisie: "",
        auteurSaisie: "",
        nbPagesSaisie: "",
    }

    handleValidationForm = (event) => {
        // empeche la soumission par défaut du formulaire
        event.preventDefault();
        this.props.ajoutLivre(this.state.titreSaisie, this.state.auteurSaisie, this.state.nbPagesSaisie);
    }

    render() {
        return (
            <>
                <h2 style={{ fontFamily: 'Sigmar One'}} className="text-center text-primary" >AFFICHAGE DU FORMULAIRE D'AJOUT</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="titre"
                            value={this.state.titreSaisie}
                            onChange={(event) => this.setState({titreSaisie: event.target.value})}    
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur" 
                            value={this.state.auteurSaisie}
                            onChange={(event) => this.setState({auteurSaisie: event.target.value})}    
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="nbPages" 
                            value={this.state.nbPagesSaisie}
                            onChange={(event) => this.setState({nbPagesSaisie: event.target.value})}
                        />
                    </div>
              
                    <Button typeBtn="btn-primary" click={this.handleValidationForm}>Valider</Button> 
                </form>
            </>
        )
    }
}

export default FormAjout;