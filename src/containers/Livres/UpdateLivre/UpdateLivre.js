import React, {Component} from 'react';
import Button from '../../../components/Button/Button';

class UpdateLivre extends Component {

    state = {
        titreSaisie: this.props.titre,
        auteurSaisie: this.props.auteur,
        nbPagesSaisie: this.props.pages,
    }

    // componentDidMount = () => {
    //     this.setState({
    //         titreSaisie: this.props.titre,
    //         auteurSaisie: this.props.auteur,
    //         nbPagesSaisie: this.props.pages,
    //     })
    // }

    handleValidation = (event) => {
        // empeche la soumission par défaut du formulaire
        event.preventDefault();
        this.props.updateLivre(this.props.id, this.state.titreSaisie, this.state.auteurSaisie, this.state.nbPagesSaisie);
    }

    render() {
        return (
            <>
                <td>
                    <input 
                        type="text" 
                        className='form-control'
                        value={this.state.titreSaisie}
                        onChange={(event) => this.setState({titreSaisie: event.target.value})}    
                    />
                </td>
                <td className="mb-3">
                    <input 
                        type="text" 
                        className='form-control'
                        value={this.state.auteurSaisie}
                        onChange={(event) => this.setState({auteurSaisie: event.target.value})}    
                    />
                </td>
                <td>
                    <input 
                        type="number" 
                        className='form-control'
                        value={this.state.nbPagesSaisie}
                        onChange={(event) => this.setState({nbPagesSaisie: event.target.value})}
                    />
                </td>
                <td>
                    <Button typeBtn="btn-primary" click={this.handleValidation}>Valider</Button> 
                </td>
            </>
        )
    }
}

export default UpdateLivre;