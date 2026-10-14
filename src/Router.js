import React, { Component } from 'react'
import MenuComponent from './components/MenuComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import DoctoresComponent from './components/DoctoresComponent';
import { useParams } from 'react-router-dom';
import CreateHospital from './components/CreateHospital';
import HospitalesComponent from './components/HospitalesComponent';
import EjemploServiceComponent from './components/EjemploServiceComponent';


export default class Router extends Component {
    render() {

        function DoctoresElement() {
            let { idHospital } = useParams();
            return (<DoctoresComponent idHospital={idHospital} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />}>Home</Route>
                    <Route path="/doctores/:idHospital" element={<DoctoresElement />} />
                    <Route path='/createhospital' element={<CreateHospital />} />
                    <Route path='/hospitales' element={<HospitalesComponent />} />
                    <Route path='ejemplo' element={<EjemploServiceComponent />} />
                </Routes>
            </BrowserRouter>

        )
    }
}
