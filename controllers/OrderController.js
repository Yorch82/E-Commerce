const { Order, Book, User } = require("../models/index");

const OrderController = {
    create(req, res) {
        Order.create({...req.body })
            .then(order => {
                order.addBook(req.body.BookId) 
                res.status(201).send({ message: 'Pedido añadido con éxito', order })})
            .catch(console.error)
    },
    getAll(req, res) {
        Order.findAll({
            include: [{model: Book, through: { attributes: [] } }, User]
        })
          .then((orders) => res.send(orders))
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Ha habido un problema",
            });
          });
    }
}

module.exports = OrderController;