const Show = require('./Show')
const User = require('./User')

User.belongsToMany(Show, { through: 'watched' })
Show.belongsToMany(User, { through: 'watched' })


module.exports = {
  Show,
  User
}
