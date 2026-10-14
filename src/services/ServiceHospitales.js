import axios from 'axios'
import Global from '../Global'

export default class ServiceHospitales {

    getDoctoresHospital(idHospital) {
        return new Promise(function (resolve) {
            let url = Global.urlApiDoctores;
            let request = "api/doctores/doctoreshospital/" + idHospital;

            axios.get(url + request).then((response) => {
                console.log("Leyendo doctores...");
                resolve(response.data);
            })
        })
    }

    getHospitales() {
        return new Promise(function (resolve) {
            let request = "api/hospitales";
            let url = Global.urlApiHospitales;

            axios.get(url + request).then((response) => {
                console.log("Leyendo hospitales...")
                resolve(response.data);
            })
        })
    }
}