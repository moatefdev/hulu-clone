const API_kEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_kEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_kEY}`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=35`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=16`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=37`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=99`,
  },
  fetchTV: {
    title: "TV",
    url: `/discover/movie?api_key=${API_kEY}&with_genres=10770`,
  },
};
