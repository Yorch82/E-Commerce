const { User } = require("../models/index");
const bcrypt = require ('bcryptjs');

const UserController = {
    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10);
        User.create({...req.body, password:password })
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch(console.error)
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
            res.send(user)
        })
    }

}

module.exports = UserController;