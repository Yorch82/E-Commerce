const { Book, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const BookController = {
    addBook(req, res) {
        Book.create({...req.body })
            .then(book => res.status(201).send({ message: 'Libro añadido exitosamente.', book }))
            .catch(console.error)
    },
    getAll(req, res) {
        Book.findAll({
          include: [],
        })
          .then((books) => res.send(books))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema al cargar los libros",
            });
          });
    },
    async delete(req, res) {
        await Book.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.send("El libro ha sido eliminada con éxito");
      },
    getById(req, res) {
    Book.findByPk(req.params.id, {
      include: [],
    })
      .then((book) => res.send(book))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  getByName(req, res) {
    Book.findAll({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar el libro",
        });
      });
  },
  getByPrice(req, res) {
    Book.findAll({
      where: {
        price: {
          [Op.like]: `%${req.params.price}%`,
        },
      },
      include: [],
    })
      .then((post) => res.send(post))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar la publicación",
        });
      });
  },
  getAllOrdered(req, res) {
    Book.findAll({
    //   include: [Book.price],
      order: [['price', 'DESC']]
    })
      .then((books) => res.send(books))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar los libros",
        });
      });
},
}

module.exports = BookController;