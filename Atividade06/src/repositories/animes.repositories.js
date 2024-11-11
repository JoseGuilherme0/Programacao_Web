const Anime = require("../models/animes")

const animesModels = []

class AnimesRepository{
    getAll(){
        return animesModels;
    };

    getById(id){
        return animesModels.find(anime => anime.id === id);

    };

    create(data){
        const anime = new Anime(data.name, data.genre, data.studio);
        animesModels.push(anime);
        return anime;
    };

    update(id, updateAnime){
        const index = animesModels.findIndex(anime => anime.id === id)
        if(index !== -1){
            animesModels[index] = {...animesModels[index], ...updateAnime}
            return animesModels[index];
        }
        return null;
    };

    delete(id){
        const index = animesModels.findIndex(animes => animes.id === id);
        if(index !== -1){
            const deletedAnime = animesModels.splice(index, 1);
            return deletedAnime[0];
        }
        return null;  
    };
}

module.exports = new AnimesRepository();