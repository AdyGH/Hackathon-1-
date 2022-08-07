const express = require("express");
var cors = require('cors')
const db = require("./mockDB");
const app = express();
app.use(cors())

const port = 3001;

const movies = [
  {
    name: "Fast and Furious: 15",
    stars: 5,
    genres: ["action"],
    description: "The cars are both fast and furious.",
    image: "https://assets.cinepolisklic.com/cmsklicia/movieimages/minions/poster_originalsize_250X375.jpg",
    preview: "https://www.youtube.com/watch?v=FUK2kdPsBws",
  },
  {
    name: "Magic Mike",
    stars: 4.69,
    genres: ["romance", "drama"],
    description: "Mike is magical.",
    image: "https://cdn11.bigcommerce.com/s-lj8wphc2lt/images/stencil/1280x1280/products/634/1602/BBDA-web__73193.1651598061.jpg",
    preview: "https://www.youtube.com/watch?v=VEhYnUr0EDE",
  },
];

app.use(express.json());

// respond with basic movies
app.get("/movies", (req, res) => {
  const cache = db.getCache();
  console.log(cache);

  const jsonOut = {
    movies: movies,
    cache: cache,
  };
  res.send(jsonOut);
});

// handle a "login" session in which we just take in preferences and write to a local db
app.post("/write/preferences", (req, res) => {
  const cache = db.getCache();

  cache.username = req.body.username;
  cache.preferences = req.body.preferences;

  db.setCache(cache);

  console.log("Wrote to cache:", cache)

  res.send(cache);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
