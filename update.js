var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "Jerin" };
  var newvalues = { $set: {name: "Jeirn I", age: 22 } };
  dbo.collection("sample").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});