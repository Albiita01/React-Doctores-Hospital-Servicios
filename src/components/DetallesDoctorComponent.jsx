import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';


export default class DetallesDoctorComponent extends Component {

    url = Global.urlApiDoctores;

    findDoctor = () => {
        let idDoctor = this.props.idDoctor;
        let request = "api/Doctores/" + idDoctor;

        axios.get(this.url + request).then((response) => {
            console.log("Cargando datos del doctor " + idDoctor);
            this.setState({
                doc: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idDoctor != this.props.idDoctor) {
            this.findDoctor();
            this.setState({
                idDoctor: -1
            })
        }
    }

    state = {
        doc: null
    }

    render() {
        return (
            <div>
                <h3>Detalles Doctor</h3>
                {
                    this.state.doc && (
                        <ul className='list-group'>
                            <li className='lits-group-item'><b>Apellido: </b>{this.state.doc.apellido}</li>
                            <li className='lits-group-item'><b>Especialidad: </b>{this.state.doc.especialidad}</li>
                            <li className='lits-group-item'><b>Salario: </b>{this.state.doc.salario}</li>
                            <li className='lits-group-item'><b>ID Hospital: </b>{this.state.doc.idHospital}</li>
                        </ul>
                    )

                }
            </div>
        )
    }
}
