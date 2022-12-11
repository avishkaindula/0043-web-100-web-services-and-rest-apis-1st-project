const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const uri =
    "mongodb+srv://avishka_indula:p7iGGaREtxbhN3t3@cluster0.ibnu8y4.mongodb.net/test";

  const client = await MongoClient.connect(uri);
  database = client.db("first-api");
}

function getDb() {
  if (!database) {
    throw { message: "You must connect first!" };
  }
  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
