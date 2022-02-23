import { Collection, Document, MongoClient, ObjectId } from "mongodb";
import express from "express";
import body from "body-parser";
import cors from "cors";
import { Categoria } from "../frontend/src/app/model/categoria.model"
import { Prodotto} from "../frontend/src/app/model/prodotto.model"

const app = express();

app.use(cors());
app.use(body.json());

const urlDb = 'mongodb://localhost:27017/utenti';
let rifDb;
let rifCollectionAnag: Collection<Document>;
let rifCollectionCats: Collection<Document>;
let rifCollectionProds: Collection<Document>;

const mongoClient = new MongoClient(urlDb);

async function run() {
    await mongoClient.connect();
    console.log('Server avviato correttamente...');
    app.listen(3000, () => {
        console.log('Server in ascolto sulla porta 3000...');
    });

    rifDb = mongoClient.db('ecommerce');
    rifCollectionAnag = rifDb.collection('utenti');
    rifCollectionCats = rifDb.collection('categorie');
    rifCollectionProds = rifDb.collection('prodotti');


}

run();

app.post('/registrati', async (req, res) => {
    console.log('registrazione in corso');
    const dbResult = await rifCollectionAnag.insertOne({
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
    });
    res.send({ result: dbResult});

});

app.get('/login', async (req, res) => {
    console.log('richiesta login');
    const dbResult = await rifCollectionAnag.findOne({
        "email": req.query.email,
        "password": req.query.password
    });
    res.send({ result: dbResult });
});

app.post('/nuovaCat', async (req, res) => {
    console.log('aggiunta categoria in corso');

    const dbResult = await rifCollectionCats.insertOne({
        nome: req.body.nome,
        percorso: req.body.percorso
    });
    res.send({ result: dbResult });
});

app.delete('/cancellaCat/:id', async (req, res) => {
    console.log('cancello categoria');
    const dbResult = await rifCollectionCats.deleteOne({ '_id': new ObjectId(req.params.id) });
    res.send({
        result: dbResult,
    });
});

app.get('/getCategorie', async (req, res) => {
    console.log('lettura categorie');
    const cursore = await rifCollectionCats.find();
    let retrievedDocs = new Array<Categoria>();
    await cursore.forEach(documento => {
        retrievedDocs.push(new Categoria(documento._id.toString(),documento.nome, documento.percorso))
    });
    res.send({ result: retrievedDocs });

});

app.put('/modificaCat/:id', async (req, res) => {
    console.log('Modifico Categoria');
    const dbResult = await rifCollectionCats.updateOne({ '_id': new ObjectId(req.params.id) }, {
        $set: {
            nome: req.body.nome,
            percorso: req.body.percorso
        }
    });
    res.send({ result: dbResult });
});

app.get('/getProdotti/:id', async (req, res) => {
    console.log('lettura prodotti da categoria');
    const cursore = await rifCollectionProds.find(
        {"categoria":{$in: [req.params.id]}});
    let retrievedDocs = new Array<Prodotto>();
    await cursore.forEach(documento => {
        retrievedDocs.push(new Prodotto(documento._id.toString(), documento.nome, documento.categoria, documento.percorso, documento.prezzo))
    });
    res.send({ result: retrievedDocs });
});

app.post('/nuovoProd', async (req, res) => {
    console.log('aggiunta prodotto in corso');
    const dbResult = await rifCollectionProds.insertOne({
        nome: req.body.nome,
        categoria: req.body.categoria,
        percorso: req.body.percorso,
        prezzo: req.body.prezzo,
    });
    res.send({ result: dbResult });
    
});

app.get('/getProdotti', async (req, res) => {
    console.log('lettura prodotti');
    const cursore = await rifCollectionProds.find();
    let retrievedDocs = new Array<Prodotto>();
    await cursore.forEach(documento => {
        retrievedDocs.push(new Prodotto(documento._id.toString(),documento.nome, documento.categoria,documento.percorso,documento.prezzo));
    });
    res.send({ result: retrievedDocs });
});

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



