const animesRepositories = require('../repositories/animes.repositories');

class animesService {
    getAllAnimes() {
        return animesRepositories.getAll();
    };

    getById(id){
        return animesRepositories.getById(id);
    };

    create(data){
        const {name, genre, studio} = data

        if (!name || !genre || !studio){
            return "Submeta todos os campos do registro";
        };
        
        return animesRepositories.create(data);
    };

    update(id, data){
        return animesRepositories.update(id, data);
    };

    delete(id){
        return animesRepositories.delete(id);
    };
}

module.exports = new animesService();