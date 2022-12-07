import React, {Component} from 'react';
import TitreH1 from './components/Titres/TitreH1';
import Button from './components/Button/Button';
import Livres from './containers/Livres/Livres';

class App extends Component {

    state = {
        btnActive: false,
    }

    handleAddLivre = () => {
      
        this.setState((oldState, props) => {
            return {
                btnActive: !oldState.btnActive
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <TitreH1>
                    Page listant les livres
                </TitreH1>
                

                <Livres 
                    ajoutLivre={this.state.btnActive} 
                    fermerAjoutLivre={() => this.setState({btnActive:false})} 
                />
                <Button 
                    typeBtn="btn-success" 
                    css="w-100" 
                    click={this.handleAddLivre}
                >
                    {!this.state.btnActive? 'Ajouter' : 'Fermer l\'ajout'}
                </Button>
            </div>
        );
    }
}


export default App;
