"use strict";
exports.__esModule = true;
var Prodotto = /** @class */ (function () {
    function Prodotto(_idProdotto, _nome, _categoria, _percorso, _prezzo) {
        if (_idProdotto === void 0) { _idProdotto = ''; }
        this._idProdotto = _idProdotto;
        this._nome = _nome;
        this._categoria = _categoria;
        this._percorso = _percorso;
        this._prezzo = _prezzo;
        this._nome = _nome;
        this._categoria = _categoria;
        this._percorso = _percorso;
        this._prezzo = _prezzo;
    }
    Object.defineProperty(Prodotto.prototype, "idProdotto", {
        get: function () {
            return this._idProdotto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "categoria", {
        get: function () {
            return this._categoria;
        },
        set: function (categoria) {
            this._categoria = categoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "percorso", {
        get: function () {
            return this._percorso;
        },
        set: function (percorso) {
            this._percorso = percorso;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "prezzo", {
        get: function () {
            return this._prezzo;
        },
        set: function (prezzo) {
            this._prezzo = prezzo;
        },
        enumerable: true,
        configurable: true
    });
    return Prodotto;
}());
exports.Prodotto = Prodotto;
