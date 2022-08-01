import axios from 'axios';

const urlWebHost = 'https://inventariofer.000webhostapp.com/'

export const testService = () =>
    axios.get(`${urlWebHost}testJson.php`)
        .then(response => response?.data);

export const getBodegas = () =>
    axios.get(`${urlWebHost}Bodega.php`)
        .then((response => response?.data));

export const getCategories = () =>
    axios.get(`${urlWebHost}Categoria.php`)
        .then((response => response?.data));

    //LISTAS PROVEEDORES, 