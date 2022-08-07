const express = require("express");
const app = express();

const port = 3000;

// respond with basic movies
app.get("/movies", (req, res) => {
  const jsonOut = {
    movies: [
      {
        name: "Fast and Furious: 15",
        stars: 5,
        description: "The cars are both fast and furious.",
        image: "string-encoded-image",
        preview: "https://www.youtube.com/watch?v=FUK2kdPsBws",
      },
      {
        name: "Magic Mike",
        stars: 4.69,
        description: "Mike is magical.",
        image: "string-encoded-image",
        preview: "https://www.youtube.com/watch?v=VEhYnUr0EDE",
      },
    ],
  };
  res.send(jsonOut);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
