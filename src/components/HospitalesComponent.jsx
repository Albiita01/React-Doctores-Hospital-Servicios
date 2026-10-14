import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'

export default class HospitalesComponent extends Component {


    loadHospitales = () => {
        this.service.getHospitales().then(result => {
            this.setState({
                hospitales: result
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    service = new ServiceHospitales();

    state = ({
        hospitales: []
    })

    render() {
        return (
            <div>
                <h1>Hospitales</h1>

                <table className='table'>
                    <thead className='table-info'>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitales.map((hospi, index) => {
                                return (<tr key={index}>
                                    <td>{hospi.idHospital}</td>
                                    <td>{hospi.nombre}</td>
                                    <td>{hospi.direccion}</td>
                                    <td>{hospi.telefono}</td>
                                    <td>{hospi.camas}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
