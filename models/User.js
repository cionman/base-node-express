module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name:{
      type:DataTypes.STRING(50),
      allowNull:false,
    },
    login_id:{
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true,
    },
    password:{
      type:DataTypes.STRING(50),
      allowNull:false,
    },
  },
    {
      timestamps :true,
      paranoid: true,
    });
}