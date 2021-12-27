"use-strict";

var response = require("./rest");
var connection = require("./connection");

//show succes menampilkan data
exports.index = function (req, res) {
  response.ok("hallooooo, rest are running yaa gaiss", res);
};

//show succes menampilkan semua data
exports.showallmhs = function (req, res) {
  connection.query("SELECT * FROM `mahasiswa`", function (error, rows, field) {
    if (error) {
      connection.log();
    } else {
      response.ok(rows, res);
    }
  });
};

//show succes menampilkan data by id
exports.showMhsById = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM `mahasiswa` WHERE id = ?",
    [id],
    function (error, rows, field) {
      if (error) {
        connection.log();
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//add data
exports.addData = function (req, res) {
  let nama = req.body.nama;
  let description = req.body.description;
  let hobby = req.body.hobby;

  connection.query(
    "INSERT INTO `mahasiswa` (`id`, `nama`, `description`, `hobby`) VALUES (NULL, ?, ?, ?)",
    [nama, description, hobby],
    function (error, rows, field) {
      if (error) {
        connection.log();
      } else {
        response.ok("Berhasil addData", res);
      }
    }
  );
};
