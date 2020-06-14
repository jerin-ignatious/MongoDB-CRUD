var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Jerin", age: 21 };
  dbo.collection("sample").insertOne(myobj, function(err, res) {
    if (err) throw err;
	db.close();
  });
});