const urlGetMovies = 'https://audiotruyen.org/wp-json/wp/v2/categories';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    return movies;
}
export const Api = {
    getMoviesFromApi
};
