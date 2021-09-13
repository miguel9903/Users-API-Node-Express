const uuidv4 = require("uuid").v4;
const users = [];

const controller = {
    
    getUsers: (req, res) => {
        if(users.length > 0) {
            res.json(users);
        } else {
            res.status(400).json({
                message: 'Users not found'
            });
        }
    },

    getUser: (req, res) => {
        const { id } = req.params;
        const user = users.find(user => user.id === id);
        if(user) {
            res.json(user);
        } else {
            res.status(400).json({
                message: 'User does not exist'
            });
        }
    },

    addUser: (req, res) => {
        const user = {
            id: uuidv4(),
            ...req.body
        };
        users.push(user);
        res.json({
            message: 'User added'
        });
    },

    putUser: (req, res) => {
        const { id } = req.params;
        const { nombre, password, correo } = req.body;
        const index = users.findIndex(user => user.id === id);
        if(index != -1) {
            users[index].nombre = nombre;
            users[index].password = password;
            users[index].correo = correo;
            res.json({
                message: `User updated`
            });
        } else {
            res.status(400).json({
                message: 'User does not exist'
            });
        }
    },

    deleteUser: (req, res) => {
        const { id } = req.params;
        const index = users.findIndex(user => user.id === id);
        if(index != -1) {
            users.splice(index, 1);
            res.json({
                message: `User deleted`
            });
        } else {
            res.status(400).json({
                message: 'User does not exist'
            });
        }
    },

    searchUser: (req, res) => {
        const { nombre } = req.params;
        const user = users.find(user => user.name === nombre);
        if(user) {
            res.json(user);
        } else {
            res.status(400).json({
                message: 'Not user found'
            });
        }
    }
    
}

module.exports = controller;