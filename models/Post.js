module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Post', {
    title:{
      type:DataTypes.STRING(100),
      allowNull:false,
    },
    content:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
  },{
    timestamps :true,
    paranoid: true,
  });
}