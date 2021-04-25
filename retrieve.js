const mongodb = require("mongodb").MongoClient;
//const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost:27017/";

mongodb.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;

    client
      .db("data_db")
      .collection("sample")
      .find({})
      .toArray((err, data) => {
        if (err) throw err;

        console.log(data);
        

        

        client.close();
      });
  }
);