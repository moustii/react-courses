import React, {Component} from 'react';
import TitreH1 from './components/Titres/TitreH1';
import Button from './components/Button/Button';
import Livres from './containers/Livres/Livres';

class App extends Component {

    handleAdd = () => {
        console.log("hey");
    }


    render() {
        return (
            <div className='container'>
                <TitreH1>
                    Page listant les livres
                </TitreH1>
                <Livres />
                <Button 
                    typeBtn="btn-success" 
                    css="w-100" 
                    click={() => console.log("adding")}
                />
            </div>
        );
    }
}





export default App;
