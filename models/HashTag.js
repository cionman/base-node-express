module.exports = (sequelize, DataTypes) => {
  return sequelize.define('HashTag', {
      title:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true,
      },
    },
    {
      timestamps :true,
      paranoid: true,
    });
}