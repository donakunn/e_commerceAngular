"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var categoria_model_1 = require("../frontend/src/app/model/categoria.model");
var prodotto_model_1 = require("../frontend/src/app/model/prodotto.model");
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
var urlDb = 'mongodb://localhost:27017/utenti';
var rifDb;
var rifCollectionAnag;
var rifCollectionCats;
var rifCollectionProds;
var mongoClient = new mongodb_1.MongoClient(urlDb);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoClient.connect()];
                case 1:
                    _a.sent();
                    console.log('Server avviato correttamente...');
                    app.listen(3000, function () {
                        console.log('Server in ascolto sulla porta 3000...');
                    });
                    rifDb = mongoClient.db('ecommerce');
                    rifCollectionAnag = rifDb.collection('utenti');
                    rifCollectionCats = rifDb.collection('categorie');
                    rifCollectionProds = rifDb.collection('prodotti');
                    return [2 /*return*/];
            }
        });
    });
}
run();
app.post('/registrati', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('registrazione in corso');
                return [4 /*yield*/, rifCollectionAnag.insertOne({
                        nome: req.body.nome,
                        cognome: req.body.cognome,
                        email: req.body.email,
                        password: req.body.password,
                        partitaiva: req.body.partitaiva,
                        nazione: req.body.nazione,
                        indirizzo: {
                            via: req.body.via,
                            comune: req.body.comune,
                            cap: req.body.cap,
                            provincia: req.body.provincia
                        },
                        telefono: req.body.telefono,
                        username: req.body.username,
                        codFiscale: req.body.codFiscale,
                    })];
            case 1:
                dbResult = _a.sent();
                res.send({ result: dbResult });
                return [2 /*return*/];
        }
    });
}); });
app.get('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('richiesta login');
                return [4 /*yield*/, rifCollectionAnag.findOne({
                        "email": req.query.email,
                        "password": req.query.password
                    })];
            case 1:
                dbResult = _a.sent();
                res.send({ result: dbResult });
                return [2 /*return*/];
        }
    });
}); });
app.post('/nuovaCat', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('aggiunta categoria in corso');
                return [4 /*yield*/, rifCollectionCats.insertOne({
                        nome: req.body.nome,
                        percorso: req.body.percorso
                    })];
            case 1:
                dbResult = _a.sent();
                res.send({ result: dbResult });
                return [2 /*return*/];
        }
    });
}); });
app.delete('/cancellaCat/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('cancello categoria');
                return [4 /*yield*/, rifCollectionCats.deleteOne({ '_id': new mongodb_1.ObjectId(req.params.id) })];
            case 1:
                dbResult = _a.sent();
                res.send({
                    result: dbResult,
                });
                return [2 /*return*/];
        }
    });
}); });
app.get('/getCategorie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cursore, retrievedDocs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('lettura categorie');
                return [4 /*yield*/, rifCollectionCats.find()];
            case 1:
                cursore = _a.sent();
                retrievedDocs = new Array();
                return [4 /*yield*/, cursore.forEach(function (documento) {
                        retrievedDocs.push(new categoria_model_1.Categoria(documento.nome, documento.percorso));
                    })];
            case 2:
                _a.sent();
                res.send({ result: retrievedDocs });
                return [2 /*return*/];
        }
    });
}); });
app.put('/modificaCat/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Modifico Categoria');
                return [4 /*yield*/, rifCollectionCats.updateOne({ '_id': new mongodb_1.ObjectId(req.params.id) }, {
                        $set: {
                            nome: req.body.nome,
                            percorso: req.body.percorso
                        }
                    })];
            case 1:
                dbResult = _a.sent();
                res.send({ result: dbResult });
                return [2 /*return*/];
        }
    });
}); });
app.get('/getProdotti/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cursore, retrievedDocs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('lettura prodotti da categoria');
                return [4 /*yield*/, rifCollectionProds.find({ "categoria": { $in: [req.params.id] } })];
            case 1:
                cursore = _a.sent();
                retrievedDocs = new Array();
                return [4 /*yield*/, cursore.forEach(function (documento) {
                        retrievedDocs.push(new prodotto_model_1.Prodotto(documento.nome, documento.categoria, documento.percorso, documento.prezzo));
                    })];
            case 2:
                _a.sent();
                res.send({ result: retrievedDocs });
                return [2 /*return*/];
        }
    });
}); });
app.post('/nuovoProd', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('aggiunta prodotto in corso');
                return [4 /*yield*/, rifCollectionProds.insertOne({
                        nome: req.body.nome,
                        categoria: req.body.categoria,
                        percorso: req.body.percorso,
                        prezzo: req.body.prezzo,
                    })];
            case 1:
                dbResult = _a.sent();
                res.send({ result: dbResult });
                return [2 /*return*/];
        }
    });
}); });
app.get('/getProdotti', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cursore, retrievedDocs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('lettura prodotti');
                return [4 /*yield*/, rifCollectionProds.find()];
            case 1:
                cursore = _a.sent();
                retrievedDocs = new Array();
                return [4 /*yield*/, cursore.forEach(function (documento) {
                        retrievedDocs.push(new prodotto_model_1.Prodotto(documento.nome, documento.categoria, documento.percorso, documento.prezzo));
                    })];
            case 2:
                _a.sent();
                res.send({ result: retrievedDocs });
                return [2 /*return*/];
        }
    });
}); });
// app.delete('/cancellaProd/:id', (req, res) => {
//     let idprodotto = req.params.id;
//     console.log('cancello prodotto con id: ' + idprodotto);
//     let qry = `delete from prodotti  where idprodotti = ${idprodotto}`;
//     db.query(qry, (err, result) => {
//         if (result.affectedRows > 0) {
//             res.send({
//                 message: 'dati cancellati correttamente.'
//             });
//         } else {
//             res.send({
//                 message: 'Impossibile cancellare il prodotto selezionato.'
//             });
//         }
//     })
// });
// app.put('/modificaProd/:id', (req, res) => {
//     let idprodotto = req.params.id;
//     let nome = req.body.nome;
//     let percorso = req.body.percorso;
//     let prezzo = req.body.prezzo;
//     let qry = `update prodotti set nome = '${nome}', percorso = '${percorso}', prezzo = '${prezzo}' where idprodotti = ${idprodotto}`;
//     db.query(qry, (err, result) => {
//         res.send({
//             message: 'dati modificati correttamente.'
//         });
//     })
// });
// app.delete('/cancellaTuttiProd/:id', (req, res) => {
//     let idcategoria = req.params.id;
//     console.log('cancello tutti i prodotti con id categoria: ' + idcategoria);
//     let qry = `delete from prodotti  where categoria = ${idcategoria}`;
//     db.query(qry, (err, result) => {
//         if (result.affectedRows > 0) {
//             res.send({
//                 message: 'dati cancellati correttamente.'
//             });
//         } else {
//             res.send({
//                 message: 'Impossibile cancellare i prodotti selezionato.'
//             });
//         }
//     })
// });
// app.get('/getUtenti/:id', (req, res) => {
//     console.log('lettura utenti');
//     let affidabile = req.params.id;
//     let qry = `select * from utenti where affidabile = ${affidabile}`;
//     db.query(qry, (err, result) => {
//         if (result.length > 0) {
//             res.send({
//                 message: 'utenti trovati',
//                 utenti: result
//             })
//         } else {
//             res.status = 400;
//             res.send({
//                 message: 'nessun utente trovato'
//             })
//         }
//     })
// });
// app.get('/getUtente/:id', (req, res) => {
//     console.log('lettura utenti');
//     let qry = `select * from utenti where idutenti = ${req.params.id}`;
//     db.query(qry, (err, result) => {
//         if (result.length > 0) {
//             res.send({
//                 message: 'utenti trovati',
//                 utenti: result
//             })
//         } else {
//             res.status = 400;
//             res.send({
//                 message: 'nessun utente trovato'
//             })
//         }
//     })
// });
// app.put('/cambiaAff/:id', (req, res) => {
//     let idUt = req.params.id;
//     let nuovaAff = req.body.affidabilita;
//     let qry = `update utenti set affidabile = '${nuovaAff}' where idutenti = ${idUt}`;
//     db.query(qry, (err, result) => {
//         res.send({
//             message: 'affidabilità cambiata correttamente.'
//         });
//     })
// });
// app.delete('/cancellaUt/:id', (req, res) => {
//     let idUt = req.params.id;
//     console.log('cancello utente con id: ' + idUt);
//     let qry = `delete from utenti where idutenti = ${idUt}`;
//     db.query(qry, (err, result) => {
//         if (result.affectedRows > 0) {
//             res.send({
//                 message: 'dati cancellati correttamente.'
//             });
//         } else {
//             res.send({
//                 message: 'Impossibile cancellare utente selezionato.'
//             });
//         }
//     })
// });
// app.put('/modificaUt/:id', (req, res) => {
//     console.log('modifico utente');
//     let user = req.body;
//     console.log(user);
//     let qry = `update utenti set nome = '${user.nome}', cognome = '${user.cognome}', email = '${user.email}', password = '${user.password}', 
//     partitaiva = '${user.partitaiva}', nazione = '${user.nazione}', indirizzo = '${user.indirizzo}', telefono = '${user.telefono}', username = '${user.username}', codfiscale = '${user.codfiscale}' where idutenti = ${user.idutenti}`;
//     db.query(qry, (err, result) => {
//         res.send({
//             message: 'dati modificati correttamente.',
//         });
//     })
// });
// app.post('/inserimento', async (req, res) => {      //esempio di post
//     let nome = req.body.nome;
//     let cognome = req.body.cognome;
//     console.log('inserimento in corso');
//     const utente = {
//         nome: nome,
//         cognome: cognome
//     }
//     const ris = await rifCollectionAnag.insertOne(utente);
//     res.send({ messaggio: 'Nuovo utente inserito corretamente' });
// });
// app.get('/getUtente/:id', async (req, res) => {
//     console.log('inside');
//     let idUtente = new ObjectId(req.params.id);
//     const ris = await rifCollectionAnag.findOne({ "_id": idUtente });
//     res.send({ result: ris });
//     console.log('dati letti dal db: ' + ris);
// })
// app.get('/utenti', async (req, res) => {
//     console.log('inside');
//     let idUtente = new ObjectId(req.params.id);
//     const ris = await rifCollectionAnag.findOne({ "_id": idUtente });
//     res.send({ result: ris });
//     console.log('dati letti dal db: ' + ris);
// })
// //Modifica nel database
// app.put('/modifica/:id', async (req, res) => {
//     //let nome = req.body.nome;
//     //let cognome = req.body.cognome;
//     let mod = {
//         $set: req.body, //{
//         //   nome: nome,
//         //   cognome: cognome,
//         // },
//     };
//     const ris = await rifCollectionAnagrafica.updateOne(
//         { _id: new ObjectId(req.params.id) },
//         mod
//     );
//     res.send({
//         risultato: ris,
//     });
// });
// //Cancella nel database
// app.put('/cancella/:id', async (req, res) => {
// });
