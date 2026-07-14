const mongoose = require("mongoose");
const initData = require("./data.js")
const recipe = require("../Models/recipe.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/recipe";

main()
  .then(() => { console.log("Connected to DB"); })
  .catch((err) => { console.log(err); });

  async function main() {
    await mongoose.connect(MONGO_URL);
    await initDB();
    await mongoose.connection.close();
    console.log("Connection closed");
}

const initDB = async () => {
    await recipe.deleteMany({});
    await recipe.insertMany(initData.data);
    console.log("Data was initialized");
};
