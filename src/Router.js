import React, { Component } from 'react'
import MenuComponent from './components/MenuComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import DoctoresComponent from './components/DoctoresComponent';
import { useParams } from 'react-router-dom';


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
                </Routes>
            </BrowserRouter>

        )
    }
}
