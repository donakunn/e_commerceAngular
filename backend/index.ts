import { Collection, Document, MongoClient, ObjectId } from "mongodb";
import express from "express";
import body from "body-parser";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { v4 as uuidv4 } from 'uuid';


const app = express();

app.use(cors());
app.use(body.json());
const urlDb = 'mongodb://localhost:27017/ecommerce';

let rifDb;
let rifCollectionAnag: Collection<Document>;
let rifCollectionCats: Collection<Document>;
let rifCollectionProds: Collection<Document>;

const mongoClient = new MongoClient(urlDb);

app.use(session({
    secret: 'chiave',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    genid: () => uuidv4(),
    store: new MongoStore({
        client: mongoClient,
        dbName: 'ecommerce'
    }),
}))

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
    if (dbResult != null) {
        req.session.username = dbResult.username;    
    }
    res.send({ result: dbResult });
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('Logout avvenuto con successo');
    });

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
    let retrievedDocs = new Array();
    await cursore.forEach(documento => {
        retrievedDocs.push(documento)
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
        { "categoria": { $in: [req.params.id] } });
    let retrievedDocs = new Array();
    await cursore.forEach(documento => {
        retrievedDocs.push(documento);
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
    let retrievedDocs = new Array();
    await cursore.forEach(documento => {
        retrievedDocs.push(documento); 
    });
    res.send({ result: retrievedDocs });
});

app.delete('/cancellaProd/:id', async (req, res) => {
    console.log('cancello prodotto con id: ' + req.params.id);
    const dbResult = await rifCollectionProds.deleteOne({ '_id': new ObjectId(req.params.id) });
    res.send({
        result: dbResult,
    });
});

app.put('/modificaProd/:id', async (req, res) => {
    console.log(`modifico prodotto con id:${req.params.id}`);
    const dbResult = await rifCollectionProds.updateOne({ '_id': new ObjectId(req.params.id) }, {
        $set: {
            nome: req.body.nome,
            categoria: req.body.categoria,
            percorso: req.body.percorso,
            prezzo: req.body.prezzo
        }
    });
    res.send({ result: dbResult });
});

app.delete('/cancellaTuttiProd/:id', async (req, res) => {
    console.log('cancello tutti i prodotti con id categoria: ' + req.params.id);
    const dbResult = await rifCollectionProds.deleteMany({ '_id': new ObjectId(req.params.id) });
    res.send({ result: dbResult });
});

app.get('/getUtenti/:affidabile', async (req, res) => {
    console.log('lettura utenti per affidabilita');
    const cursore = await rifCollectionAnag.find(
        { "affidabile": { $in: [req.params.affidabile] } });
    let retrievedDocs = new Array();
    await cursore.forEach(documento => {
        retrievedDocs.push(documento);
    });
    res.send({ result: retrievedDocs });
});

app.get('/getUtente/:id', async (req, res) => {   //check
    console.log(`lettura utente con id ${req.params.id}`);
    const cursore = await rifCollectionAnag.find(
        { "_id": { $in: [req.params.id] } });
    let retrievedDocs = new Array();
    await cursore.forEach(documento => {
        retrievedDocs.push(documento);
    });
    res.send({ result: retrievedDocs });
});

app.put('/cambiaAff/:id', async (req, res) => {
    console.log(`cambio affidabilità su id: ${req.params.id}`);
    const dbResult = await rifCollectionAnag.updateOne({ '_id': new ObjectId(req.params.id) }, {
        $set: {
            affidabilita: req.body.affidabilita,
        }
    });
    res.send({ result: dbResult });
});


app.delete('/cancellaUt/:id', async (req, res) => {
    console.log('cancello utente con id: ' + req.params.id);
    const dbResult = await rifCollectionAnag.deleteOne({ '_id': new ObjectId(req.params.id) });
    res.send({
        result: dbResult,
    });
});

app.put('/modificaUt/:id', async (req, res) => {
    console.log('modifico utente');
    let user = req.body;
    const dbResult = await rifCollectionProds.updateOne({ '_id': new ObjectId(req.params.id) }, {
        $set: {
            nome: user.nome,
            cognome: user.cognome,
            email: user.email,
            password: user.password,
            partitaiva: user.partitaiva,
            nazione: user.nazione,
            indirizzo: {
                via: user.via,
                comune: user.comune,
                cap: user.cap,
                provincia: user.provincia
            },
            telefono: user.telefono,
            username: user.username,
            codFiscale: user.codFiscale,
        }
    });
    res.send({ result: dbResult });
});

