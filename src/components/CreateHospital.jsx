import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import ServiceHospitales from '../services/ServiceHospitales';

export default class CreateHospital extends Component {

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    service = new ServiceHospitales();

    insertHospital = (event) => {
        event.preventDefault();
        let hospital = {
            idHospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value),
        }
        this.service.insertHospital(hospital).then(result => {
            console.log("Insertado!!");
            this.setState({
                mensaje: "Hospital insertado correctamente: " + hospital.nombre,
                status: true
            })
        })

    }

    state = ({
        mensaje: "",
        status: false
    })

    render() {
        return (
            <div>
                {
                    this.state.status == true && (<Navigate to={"/hospitales"} />)
                }

                <h1>Create Hospital</h1>
                <h3 style={{ color: "blue" }}>{this.state.mensaje}</h3>
                <form>
                    <label>ID del hospital: </label>
                    <input type='number' ref={this.cajaId} className='form-control' /><br />
                    <label>Nombre del hospital: </label>
                    <input type='text' ref={this.cajaNombre} className='form-control' /><br />
                    <label>Dirección del hospital: </label>
                    <input type='text' ref={this.cajaDireccion} className='form-control' /><br />
                    <label>Teléfono del hospital: </label>
                    <input type='text' ref={this.cajaTelefono} className='form-control' /><br />
                    <label>Camas del hospital: </label>
                    <input type='number' ref={this.cajaCamas} className='form-control' /><br />
                    <button onClick={this.insertHospital} className='btn btn-dark'>Crear</button>
                </form>
            </div>
        )
    }
}
