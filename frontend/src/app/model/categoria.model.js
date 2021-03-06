"use strict";
exports.__esModule = true;
var Categoria = /** @class */ (function () {
    function Categoria(idCategoria, nome, percorso) {
        this._idCategoria = idCategoria;
        this._nome = nome;
        this._percorso = percorso;
    }
    Object.defineProperty(Categoria.prototype, "idCategoria", {
        get: function () {
            return this._idCategoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Categoria.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Categoria.prototype, "percorso", {
        get: function () {
            return this._percorso;
        },
        set: function (percorso) {
            this._percorso = percorso;
        },
        enumerable: true,
        configurable: true
    });
    return Categoria;
}());
exports.Categoria = Categoria;
