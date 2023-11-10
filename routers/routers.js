const express = require("express");
const { User, Show } = require("../models/index");
const userRouter = express.Router();
const showRouter = express.Router();
const Sequelize = require("sequelize");

userRouter.use(express.json());
userRouter.use(express.urlencoded({extended: true}));

showRouter.use(express.json());
showRouter.use(express.urlencoded({extended: true}));

//user router:

userRouter.get('/:id', async (request, response) => {
    const oneUser = await User.findByPk(request.params.id);
    response.json(JSON.stringify(oneUser));
})
userRouter.get('/shows/:id', async (request, response) => {
    let oneShow = request.params.id;
    const allUser = await Show.findAll({include: [{model: User,
        where: {id: oneShow}}], attributes: ['title', 'genre']});
    response.json(JSON.stringify(allUser));
})
userRouter.put('/:uID/:sID', async (request, response) => {
    let oneUser = await User.findByPk(request.params.uID);
    let oneShow = request.params.sID;
    await oneUser.addShow(oneShow);
    response.send(JSON.stringify(oneUser));
})
userRouter.get('/', async (request, response) => {
    const allUser = await User.findAll();
    response.json(allUser);
})
module.exports = { userRouter, showRouter };