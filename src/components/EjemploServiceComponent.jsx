import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {

    // Necesitamos un objeto de la clase service
    service = new ServiceEjemplo();

    state = ({
        mensaje1: "",
        mensaje2: "",
        comics: []
    })

    loadData = () => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia("Alba"),
            comics: this.service.getComics()
        })
    }

    componentDidMount = () => {
        this.loadData();
    }

    render() {
        return (
            <div>
                <h1>Ejemplo</h1>
                <h2 style={{ color: "blue" }}>{this.state.mensaje1}</h2>
                <h2 style={{ color: "blue" }}>{this.state.mensaje2}</h2>
                <h2 style={{ color: "red" }}>Comics: {this.state.comics.length}</h2>
                {
                    this.state.comics.map((c, index) => {
                        return (<div key={index}>
                            <h3 style={{ color: "orangered" }}>{c.titulo}</h3>
                            <img src={c.imagen} style={{ width: "120px", height: "150px" }} />
                        </div>)
                    })
                }
            </div>
        )
    }
}
