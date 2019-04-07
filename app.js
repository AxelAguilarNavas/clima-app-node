const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log)


const getInfo = async direccion => {
    try {

        const placeInfo = await lugar.getLugarLatLng(direccion);
        const weather = await clima.getClima(placeInfo.lat, placeInfo.lng);

        return `El clima de ${placeInfo.direccion} es de ${weather}`
    } catch (e) {
        return `No de pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);