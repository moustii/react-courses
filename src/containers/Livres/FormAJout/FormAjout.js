import React, {Component} from 'react';
import Button from '../../../components/Button/Button';
import {withFormik} from 'formik';
import * as Yup from 'yup';

class FormAjout extends Component {

    // handleValidationForm = (event) => {
    //     // empeche la soumission par défaut du formulaire
    //     event.preventDefault();
    //     this.props.ajoutLivre(this.state.titreSaisie, this.state.auteurSaisie, this.state.nbPagesSaisie);
    //     this.setState({
    //         titreSaisie: "",
    //         auteurSaisie: "",
    //         nbPagesSaisie: "",
    //     });
    //     console.log(this.state.btnActive);
    // }

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
                            name="titre"
                            value={this.props.values.titre}
                            onChange={this.props.handleChange}  
                            onBlur={this.props.handleBlur}  
                        />
                        {
                            (this.props.touched.titre && this.props.errors.titre) && 
                            <span style={{color:"red"}}>{this.props.errors.titre}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur" 
                            name="auteur"
                            value={this.props.values.auteur}
                            onChange={this.props.handleChange}   
                            onBlur={this.props.handleBlur} 
                        />
                        {
                            (this.props.touched.auteur && this.props.errors.auteur) && 
                            <span style={{color:"red"}}>{this.props.errors.auteur}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="nbPages"
                            name="nbPages" 
                            value={this.props.values.nbPages}
                            onChange={(event) => this.props.setFieldValue('nbPages', parseInt(event.target.value))}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            (this.props.touched.nbPages && this.props.errors.nbPages) && 
                            <span style={{color:"red"}}>{this.props.errors.nbPages}</span>
                        }
                    </div>
              
                    <Button typeBtn="btn-primary" click={this.props.handleSubmit}>Valider</Button> 
                </form>
            </>
        )
    }
}

export default withFormik({
    // lier les inputs aux props de formik (name input) (remplace les states)
    mapPropsToValues: () => ({
        titre: "",
        auteur: "",
        nbPages: ""
    }),
    validationSchema: Yup.object().shape({
        titre: Yup.string()
                    .min(3, 'au moins 3 caracteres')
                    .max(15, 'moins de 15 caracteres')
                    .required('champ obligatoire'),
        auteur: Yup.string()
                    .min(3, 'au moins 3 caracteres')
                    .required('champ obligatoire'),
        nbPages: Yup.number()
                    .lessThan(1200, 'moins de 1200')
                    .moreThan(50, 'plus de 50')
                    .required('champ obligatoire')
    }),
    // validate: value => {
    //     const errors = {};
    //     if (value.titre.length < 3) {
    //         errors.titre = "Le titre doit supérieur à 3 caracteres";
    //     }
    //     if (value.titre.length > 15) {
    //         errors.titre = "Le titre doit inferieur à 15 caracteres";
    //     }
    //     if (!value.auteur) {
    //         errors.auteur = "Le champ est obligatoire";
    //     }
    //     return errors;
    // }, 
    handleSubmit: (value, {props}) => {
        props.ajoutLivre(value.titre, value.auteur, value.nbPages);
    } 
})(FormAjout);