const express = require("express");
const { User, Show } = require("../models/index");
const userRouter = express.Router();
const showRouter = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

//user router:
userRouter.get('/', (require, response) => {
    const allUsers = User.findAll();
    response.json(allUsers);
})
userRouter.get('/:id', (require, response) => {
    const oneUser = User.findByPk(request.params.id);
    response.json(oneUser);
})
userRouter.get('/shows/:id', (require, response) => {
    const oneUser = Show.findAll({where: {userId: request.params.id}});
    response.json(oneUser);
})
userRouter.put('/:userId/:showId', (require, response) => {
    
})

module.exports = { userRouter, showRouter };