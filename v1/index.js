const config = require("./pkg/config");
const express = require("express");
const {
  search,
  getByQuery,
  getByID,
  getPopMovies,
  getPoster,
  getVideo,
  getTvByQuery,
  getShowByID,
} = require("./handlers/movie");

const api = express();

api.get("/api/v1/search/:keyword", search);
api.get("/api/v1/movies/search/:keyword", getByQuery);
api.get("/api/v1/movies/:movie_id", getByID);
api.get("/api/v1/movies/popular", getPopMovies);
// api.get("/api/v1/movies/posters/:poster_path", getPoster);
api.get("/api/v1/movies/trailers/:movie_id", getVideo);
api.get("/api/v1/tv/search/:keyword", getTvByQuery);
api.get("/api/v1/tv/:tv_id", getShowByID);

api.listen(config.get("service").port, (err) => {
  if (err) return console.log(err);
  return console.log("Service started on port:", config.get("service").port);
});
