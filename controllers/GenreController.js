const { Genre, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const GenreController = {
    addGenre(req, res) {
        Genre.create({...req.body })
            .then(genre => res.status(201).send({ message: 'Género añadido exitosamente.', genre }))
            .catch(console.error)
    },

    genreById(req, res) {
        Genre.findByPk(req.params.id)
        .then(genre => res.send(genre))
    },

    genreByName(req, res) {
        Genre.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            },
        })
        .then(genre => res.send(genre))
    }
}

module.exports = GenreController;