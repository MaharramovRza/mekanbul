var mongoose = require("mongoose");
require("./mekansema");
var dbURI = //"mongodb://localhost/mekanbul";
  //var dbURI =
  "mongodb+srv://rza:1234@mekanbul.sukzego.mongodb.net/mekanbul?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true });
function kapat(msg, callback) {
  mongoose.connection.close(function () {
    console.log(msg);
    callback();
  });
}
process.on("SIGINT", function () {
  kapat("Uygulama kapatildi!", function () {
    process.exit(0);
  });
});
mongoose.connection.on("connected", function () {
  console.log(dbURI + " adresindeki veritabanina baglanildi!\n");
});
mongoose.connection.on("error", function () {
  console.log("Baglanti hatasi\n");
});
mongoose.connection.on("disconnected", function () {
  console.log("Baglanti kesildi!\n");
});
