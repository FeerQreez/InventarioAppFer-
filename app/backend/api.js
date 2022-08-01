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

export const getProducts = () =>
    axios.get(`${urlWebHost}ConsultaProductos.php`)
        .then((response => response?.data));

export const getEntities = () =>
    axios.get(`${urlWebHost}Entidad.php`)
        .then((response => response?.data));

export const getShelf = () =>
    axios.get(`${urlWebHost}Estante.php`)
        .then((response => response?.data));

export const getStatus = () =>
    axios.get(`${urlWebHost}Estatus.php`)
        .then((response => response?.data));

export const getSuppliers = () =>
    axios.get(`${urlWebHost}ProveedoresDistribuidoresFabricantes.php`)
        .then((response => response?.data));