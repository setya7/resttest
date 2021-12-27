"use-strict";

module.exports = function (app) {
  var jsonTest = require("./controller");
  app.route("/").get(jsonTest.index);
  app.route("/all").get(jsonTest.showallmhs);
  app.route("/showByid/:id").get(jsonTest.showMhsById);
  app.route("/addData").post(jsonTest.addData);
};
