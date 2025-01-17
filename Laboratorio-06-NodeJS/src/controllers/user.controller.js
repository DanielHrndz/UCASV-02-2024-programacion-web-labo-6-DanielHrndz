const { users } = require('../models/user.model');
const { addNewUser } = require('../services/user.service');
const addUserController = (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = addNewUser(name, lastname, email)
        res.render('home.pug', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}
const showForm = (req, res) => {
    res.render('form.pug');
}

const showAllUsers = (req, res) => {
    res.render('allUsers.pug', {users});
}
module.exports = {
    addUserController, showForm, showAllUsers
}