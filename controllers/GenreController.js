const { Genre, Sequelize, Book } = require("../models/index");
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
    },
    getGenreWithBooks(req, res) {
        Genre.findAll({
          include: [{model: Book, through: { attributes: [] } }],
        })
          .then((genres) => res.send(genres))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los libros",
            });
          });
    },
    getAll(req, res) {
        Genre.findAll()
          .then((genres) => res.send(genres))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los libros",
            });
          });
    },
    async delete(req, res) {
        await Genre.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.send("El género ha sido eliminada con éxito.");
      }
}

module.exports = GenreController;