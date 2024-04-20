const Task = require('./Tasks');
const User = require('./User');

// Define associations between models if needed
// For example:
// Task.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Task, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = { Task, User };
