const express = require('express');

const app = express();

app.use(express.json());

let animes = [
  {
    id: 1,
    name: "Inazuma Eleven",
    genre: "Esporte",
    studio: "OLM"
  },
  { 
    id: 2, 
    name: "One Piece", 
    genre: "Aventura", 
    studio: "Toei Animation"
  },
  { 
    id: 3, 
    name: "Attack on Titan", 
    genre: "Ação", 
    studio: "MAPPA"
  },
  { 
    id: 4, 
    name: "My Hero Academia", 
    genre: "Ação", 
    studio: "Bones"
  },
  { 
    id: 5, 
    name: "Demon Slayer", 
    genre: "Aventura", 
    studio: "ufotable" 
  },
  { 
    id: 6, 
    name: "Death Note", 
    genre: "Suspense", 
    studio: "Madhouse" 
  },
];

const generateId = () => animes.length ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;

app.get("/animes", (req, res) => {
  res.json(animes);
});

app.get('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    anime ? res.json(anime) : res.status(404).json({ message: 'Anime não encontrado' });
});

app.post("/animes", (req, res) => {
    const { name, genre, studio } = req.body;
    if (!name || !genre || !studio) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
  
    const newAnime = { id: generateId(), name, genre, studio };
    animes.push(newAnime);
    res.status(201).json(newAnime);
});

app.put("/animes/:id", (req, res) => {
    const { name, genre, studio } = req.body;
    const animeIndex = animes.findIndex(a => a.id === parseInt(req.params.id));
  
    if (animeIndex === -1) {
      return res.status(404).json({ message: 'Anime não encontrado' });
    }
    if (!name || !genre || !studio) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
  
    animes[animeIndex] = { ...animes[animeIndex], name, genre, studio };
    res.json(animes[animeIndex]);
});

app.delete("/animes/:id", (req, res) => {
    const animeIndex = animes.findIndex(a => a.id === parseInt(req.params.id));

    if (animeIndex === -1) {
      return res.status(404).json({ message: 'Anime não encontrado' });
    }
  
    const deletedAnime = animes.splice(animeIndex, 1);
    res.json(deletedAnime[0]);
});

module.exports = app;