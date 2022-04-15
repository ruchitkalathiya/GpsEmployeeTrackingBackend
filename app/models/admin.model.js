module.exports = (sequelize, Sequelize) => {
    const Adminusers = sequelize.define("adminusers", {
      username: {
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
      }
    });
    return Adminusers;
};