const User = require('./user')
const Feeling = require('./feeling')
const Cycle = require('./cycle')


// Mourn.belongsTo(Cycle); 
// Cycle.hasMany(Mourn); 

// Intention.belongsTo(Cycle); 
// Cycle.hasMany(Intention); 

// Appreciate.belongsTo(Cycle); 
// Cycle.hasMany(Appreciate); 
// Mourn.belongsTo(User); 
// User.hasMany(Mourn); 

// Intention.belongsTo(User); 
// User.hasMany(Intention); 

// Appreciate.belongsTo(User); 
// User.hasMany(Appreciate); 

Feeling.belongsTo(User); 
User.hasMany(Feeling); 

module.exports = {
  User, 
  Feeling, 
  Cycle
}
