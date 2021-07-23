const mongoose = require("mongoose");

const connectMongoDb = () => {
  mongoose
    .connect(process.env.mongoDb_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Db connected"))
    .catch(() => console.log(err));
};

module.exports = connectMongoDb;
