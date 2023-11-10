const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Show,User } = require('./models/index')
const app = require('./src/app');
const { error } = require('console');
//const seed = require("./db/seed");

describe('./users endpoint', () => {
    let restQuantity;
    beforeAll(async () => {
        restQuantity = (await User.findAll()).length;
        console.log(restQuantity);
    })

    test("user - check status", async () => {
        const response = await request(app).get("/users");
        expect(response.status).toBe(200);
    })

    test("user - check array", async () => {
        const response = await request(app).get("/users");
        const allUser = await User.findAll({});
        console.log(response.body[0]);
        expect(Array.isArray(response.body[0])).toBe(true);
        expect(response.body[0]).toHaveProperty('username');
    })

    test("user - check array length", async () => {
        const response = await request(app).get("/users");
        const allUser = await User.findAll({});
        const num = allUser.length;
        expect(response.body.length).toBe(num);
    })
})