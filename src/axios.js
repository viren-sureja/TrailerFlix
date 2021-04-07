import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

/* 
    By using Axios it's easy to send asynchronous HTTP request to REST endpoints and perform CRUD operations
    
    it will help to append the rest of the request path to this database common path
    instance.get('new_movies')
    eg. https://api.themoviedb.org/3/new_movies
*/

export default instance;
