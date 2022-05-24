const { Order, Book } = require("../models/index");

const OrderController = {
    create(req, res) {
        Order.create({...req.body })
            .then(order => {
                order.addBook(req.body.BookId) //Añadido linea 7 y llaves
                res.status(201).send({ message: 'Pedido añadido con éxito', order })})
            .catch(console.error)
    },

}

module.exports = OrderController;