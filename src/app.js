const { userRouter, showRouter } = require("../routers/routers.js");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter);
app.use("/show", showRouter);

module.exports = app;