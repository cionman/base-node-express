const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log('데이터베이스 연결성공!');
  })
  .catch(err => {
    console.error('데이터베이스 연결에러!', err);
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./User')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.HashTag = require('./HashTag')(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

db.Post.belongsToMany(db.HashTag, {through : 'PostHashTag'});
db.HashTag.belongsToMany(db.Post, {through : 'PostHashTag'});

db.User.belongsToMany(db.User, {
  foreignKey:'followingId',
  as:'Followers',
  through:'Follow',
});

db.User.belongsToMany(db.User, {
  foreignKey:'followerId',
  as:'Followings',
  through:'Follow',
});

sequelize.sync();

module.exports = db;