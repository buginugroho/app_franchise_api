'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST API berhasil dijalankan", res)
};

//menampilkan data semua franchise
exports.tampilSemuaFranchise = function (req, res) {
    connection.query('SELECT * FROM franchisor', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan data franchise berdasarkan id
exports.tampilFranchiseBerdasarkanId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM franchisor WHERE id_franchisor = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data pengguna berdasarkan id
exports.tampilPenggunaBerdasarkanId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM franchisee WHERE id_franchisee = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};