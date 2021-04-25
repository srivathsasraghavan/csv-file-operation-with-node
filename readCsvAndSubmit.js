const mongodb = require("mongodb").MongoClient;

const express = require('express');

const app = express()
app.set('view engine','ejs')
app.listen(5000)

const csvtojson = require("csvtojson");

var file;

let url = "mongodb://localhost:27017/";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('enter the file name :', file => {

    
csvtojson()
.fromFile(file)
.then(csvData => {
  console.log(csvData);

  mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) throw err;

      client
        .db("data_db")
        .collection("sample")
        .insertMany(csvData, (err, res) => {
          if (err) throw err;

          console.log(`Inserted: ${res.insertedCount} rows`);
          client.close();
        });
    }
  );
});



    readline.close();
  });


