module.exports = {
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "bce6cca7952e9e",
  PASSWORD: "75b03b87",
  DB: "heroku_0dba38601f40a75",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};