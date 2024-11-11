const animeService = require("../service/animes_Service");

class animesController {
    getallAnimes(req, res){
        const animes = animeService.getAllAnimes();
        return res.status(200).json(animes);
    };

    getById(req, res){
        const {id} = req.params;
        const anime = animeService.getById(id);
        if (!anime){
            return res.status(404).json({message: "Anime não encontrado"});
        }
        return res.status(200).json(anime);
    };

    addAnime(req, res){
        const newAnime = req.body;
        animeService.create(newAnime);
        return res.status(201).json(newAnime);
    };

    updateAnime(req, res){
        const {id} = req.params;
        const data = req.body;
        const anime = animeService.update(id, data);
        if (!anime){
            return res.status(404).json({message: "Anime não encontrado"});
        }
        return res.status(200).json(anime);
    };

    deleteAnime(req, res){
        const {id} = req.params;
        const anime = animeService.delete(id);
        if (!anime){
            return res.status(404).json({message: "Anime não encontrado"});
        }
        return res.status(200).json({message: "Anime deletado com sucesso"});
    };
}

module.exports = new animesController();