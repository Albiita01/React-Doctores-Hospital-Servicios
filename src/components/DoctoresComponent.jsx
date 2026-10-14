import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import DetallesDoctorComponent from './DetallesDoctorComponent';
import ServiceHospitales from '../services/ServiceHospitales';

export default class DoctoresComponent extends Component {

    service = new ServiceHospitales();

    state = {
        doctores: [],
        iddoctor: -1 // Puedo poner 0 también
    }

    loadDoctoresHospital = () => {
        this.service.getDoctoresHospital(this.props.idHospital).then(result => {
            this.setState({
                doctores: result
            })
        })


    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idHospital != this.props.idHospital) {
            this.loadDoctoresHospital();
            // Esto del setState es para que si hemos visto los detalles de un doctor y cambio de hospital, 
            // que no salgan los datos de ese doctor
            this.setState({
                iddoctor: -1
            })
        }
    }

    render() {
        return (
            <div>

                <h1>Doctores del hospital {this.props.idHospital}</h1>
                <table className='table'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (<tr key={index}>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.especialidad}</td>
                                    <td>{doc.salario}</td>
                                    <td>{doc.idHospital}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.setState({ iddoctor: doc.idDoctor })
                                        }}>Detalles</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.iddoctor != -1 &&
                    (<DetallesDoctorComponent idDoctor={this.state.iddoctor} />)
                }
            </div>
        )
    }
}
