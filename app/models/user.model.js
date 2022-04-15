module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      bDay:{
        type: Sequelize.STRING
      },
      bMonth:{
        type: Sequelize.STRING
      },
      bYear:{
        type: Sequelize.STRING
      },
      employeerole:{
        type: Sequelize.STRING
      },
      employeeselery:{
        type: Sequelize.STRING
      },
      employeeitype: {
        type: Sequelize.STRING
      },
      employeeiname: {
        type: Sequelize.STRING
      },
      employeeipath: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };