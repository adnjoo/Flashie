var fs = require("fs");
var obj;
const axios = require("axios");

fs.readFile("a.json", "utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  obj.forEach(async function (item) {
    console.log(item.front);
    let x = await axios.post("http://localhost:4001/createcard", {
      front: item.front,
      back: item.back,
      cardSet: item.cardset,
    });
    console.log(x.data);
  });
});
