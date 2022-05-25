const { User, Token, Order, Book, Sequelize,} = require("../models/index");
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize


const UserController = {
    create(req, res, next) {
        // req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10);
        User.create({...req.body, password:password })
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch(error => {
                error.origin = 'User';
                next(error);              
            })            
    },

    login(req, res){
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(!user){
                return res.status(400).send({message: "Usuario o contraseña incorrecta."})
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({message: "Usuario o contraseña incorrecta."})
            }
            token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send(user)
        })
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
                } catch (error) {
                    console.log(error)
                    res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
                }
        },

        loginUserOrder(req, res){
                User.findOne({
                    where: {
                        id: req.user.id
                    },
                    include: [{model: Order, include: [{model:Book}]}
                ]
                })
                .then((user) => res.send(user))
                .catch((err) => {
                    // error.origin = 'Order';
                    // next(error)
                    console.log(err);
                    res.status(500).send({ message: "Error localizando productos del pedido." })
                })
        }


}

module.exports = UserController;