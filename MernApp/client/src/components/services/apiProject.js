import axios from 'axios';

const apiProject = axios.create({
    baseURL: 'http://localhost:8800',
});

export default apiProject;
// il faut l'importer dans App.js