'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST API berhasil dijalankan", res)
};

/* Kode menampilkan data (GET) */

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

//menampilkan data semua paket pada satu franchise
exports.tampilPaketFranchise = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM paket_franchise WHERE id_franchisor = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data paket franchise berdasarkan id
exports.tampilPaketFranchiseBerdasarkanId = function (req, res) {
    let id_franchisor = req.params.id_franchisor;
    let id_paket = req.params.id_paket;
    connection.query('SELECT * FROM paket_franchise WHERE id_franchisor = ? AND id_paket = ?',
        [id_franchisor, id_paket],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data franchise dengan paket nested
exports.tampilNestedFranchise = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT franchisor.id_franchisor, franchisor.nama, franchisor.email, franchisor.pusat_lokasi, franchisor.tahun_berdiri, franchisor.deskripsi, paket_franchise.nama_paket FROM paket_franchise JOIN franchisor WHERE franchisor.id_franchisor = ? AND paket_franchise.id_franchisor = franchisor.id_franchisor ORDER BY paket_franchise.id_paket',
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.okPaketNested(rows, res);
            }
        }
    )
}

//menampilkan data semua sosial media pada satu franchise
exports.tampilSosialMedia = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM sosial_media WHERE id_franchisor = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data paket franchise berdasarkan id
exports.tampilSosialMediaBerdasarkanId = function (req, res) {
    let id_franchisor = req.params.id_franchisor;
    let id_sosmed = req.params.id_sosmed;
    connection.query('SELECT * FROM sosial_media WHERE id_franchisor = ? AND id_sosmed = ?',
        [id_franchisor, id_sosmed],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data semua pendaftaran pada satu franchisor
exports.tampilPendaftaranFranchisor = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM pendaftaran WHERE id_franchisor = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data pendaftaran sisi franchisor berdasarkan id
exports.tampilPendaftaranFranchisorBerdasarkanId = function (req, res) {
    let id_franchisor = req.params.id_franchisor;
    let id_pendaftaran = req.params.id_pendaftaran;
    connection.query('SELECT * FROM pendaftaran WHERE id_franchisor = ? AND id_pendaftaran = ?',
        [id_franchisor, id_pendaftaran],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data semua pendaftaran pada satu franchisee
exports.tampilPendaftaranFranchisee = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM pendaftaran WHERE id_franchisee = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan data pendaftaran sisi franchisee berdasarkan id
exports.tampilPendaftaranFranchiseeBerdasarkanId = function (req, res) {
    let id_franchisee = req.params.id_franchisee;
    let id_pendaftaran = req.params.id_pendaftaran;
    connection.query('SELECT * FROM pendaftaran WHERE id_franchisee = ? AND id_pendaftaran = ?',
        [id_franchisee, id_pendaftaran],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

/* Kode menambahkan data (POST) */

//menambahkan data pengguna franchisee
exports.registerFranchisee = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var nama = req.body.nama;
    var email = req.body.email;
    var nomor_hp = req.body.nomor_hp;

    connection.query('INSERT INTO franchisee (username, password, nama, email, nomor_hp) VALUES (?,?,?,?,?)',
        [username, password, nama, email, nomor_hp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil membuat akun Franchisee!", res);
            }
        });
};

//menambahkan data pengguna franchisor
exports.registerFranchisor = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var nama = req.body.nama;
    var email = req.body.email;
    var nomor_hp = req.body.nomor_hp;
    var pusat_lokasi = req.body.pusat_lokasi;
    var tahun_berdiri = req.body.tahun_berdiri;

    connection.query('INSERT INTO franchisor (username, password, nama, email, nomor_hp, pusat_lokasi, tahun_berdiri) VALUES (?,?,?,?,?,?,?)',
        [username, password, nama, email, nomor_hp, pusat_lokasi, tahun_berdiri],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil membuat akun Franchisor!", res);
            }
        });
};

//menambahkan data paket franchise
exports.tambahPaketFranchise = function (req, res) {
    var nama_paket = req.body.nama_paket;
    var harga = req.body.harga;
    var fasilitas = req.body.fasilitas;
    var deskripsi = req.body.deskripsi;
    var id_franchisor = req.body.id_franchisor;

    connection.query('INSERT INTO paket_franchise (nama_paket, harga, fasilitas, deskripsi, id_franchisor) VALUES (?,?,?,?,?)',
        [nama_paket, harga, fasilitas, deskripsi, id_franchisor],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil membuat akun Franchisor!", res);
            }
        });
};

//menambahkan data sosial media
exports.tambahSosialMedia = function (req, res) {
    var platform_sosmed = req.body.platform_sosmed;
    var alamat_sosmed = req.body.alamat_sosmed;
    var id_franchisor = req.body.id_franchisor;

    connection.query('INSERT INTO sosial_media (platform_sosmed, alamat_sosmed, id_franchisor) VALUES (?,?,?)',
        [platform_sosmed, alamat_sosmed, id_franchisor],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil membuat akun Franchisor!", res);
            }
        });
};