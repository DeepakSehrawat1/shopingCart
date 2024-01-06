const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

function helperfunction(cb) {
  fs.readFile(p, (err, readcontent) => {
    if (err) {
      cb([]);
    } else {
      const content = readcontent.toString().trim();

      if (content === "") {
        cb([]); // Pass an empty array if the file is empty
      } else {
        try {
          const items = JSON.parse(content);
          cb(items);
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
          cb([]);
        }
      }
    }
  });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    helperfunction((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetch(cb) {
    helperfunction(cb);
  }
};
