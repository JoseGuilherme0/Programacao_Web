const app = require('./app')

const porta = 8000;

let animes = {
    id: 1,
    name: 'Inazuma Eleven',
    genre: 'Esporte',
    studio: 'OLM'
}

app.get('/animes', (req, res) => {
    res.json(animes);
});

app.post('/animes', (req,res)=> {
    const { name, genre, studio } = req.body;
    const newAnime = {
        id: animes.length + 1,
        name,
        genre,
        studio
    };
    animes.push(newAnime);
    res.status(201).json(newAnime);
})

app.put('/animes/:id', (req,res)=>{
    const animeId = parseInt(req.params.id);
    const anime = animes.find(a => a.id === animeId);
    if (!anime) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }

    const { name, genre, studio } = req.body;
    anime.name = name !== undefined ? name : anime.name;
    anime.genre = genre !== undefined ? genre : anime.genre;
    anime.studio = studio !== undefined ? studio : anime.studio;

    res.json(anime);
})

app.delete('/animes/:id', (req,res)=> {
    const animeId = parseInt(req.params.id);
    const index = animes.findIndex(a => a.id === animeId);
    if (index === -1) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }
    animes.splice(index, 1);
    res.status(204).send(); 
})


app.listen(porta, () => {
    console.log('servidor na porta 8000')
})