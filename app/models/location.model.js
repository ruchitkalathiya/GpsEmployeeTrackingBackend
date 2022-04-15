module.exports = (sequelize, Sequelize) => {
  const Locationtable = sequelize.define("locationtables", {
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
    date: {
      type: Sequelize.DATE
    },
    employeelatitute: {
      type: Sequelize.STRING
    },
    employeelongitute: {
      type: Sequelize.STRING
    },
  });

  return Locationtable;
};