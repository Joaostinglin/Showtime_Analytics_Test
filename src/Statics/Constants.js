// variables
let tmDbKey = "api_key=cfaeffcb937bcd326c2c4cd0aae01fbf";

let getMovieByIdEndPoint = `/movie/`;
let top20RatedEndPoint = `/discover/movie?sort_by=popularity.desc&`;

let showtimeLogo = "https://images.squarespace-cdn.com/content/5a97eb0cc3c16af81b7085c9/1521541426559-M1KS8JCUL2KTDGD30BSG/Logo_grey.jpg?content-type=image%2Fjpeg";
let urlApi = "https://api.themoviedb.org/3";

const consts = {
    showtimeLogo: showtimeLogo,
    tmdbKey: tmDbKey,
    urlBase: urlApi,
    getById: getMovieByIdEndPoint,
    getTopRatedMovies: top20RatedEndPoint
}

export default consts;