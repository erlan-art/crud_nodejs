const sequelize = require("sequalize");
const db = new sequalize("crudnodejs", "root", "", {
    dialect: "mysql"
});
db.sync({});
module.exports = db;