export class Prodotto {
    constructor( private _idProdotto: string = '',
        private _nome: string,
        private _categoria: number,
        private _percorso: string,
        private _prezzo: number,
    ) {
        this._nome = _nome;
        this._categoria = _categoria;
        this._percorso = _percorso;
        this._prezzo = _prezzo;
    }

    public get idProdotto(): string {
        return this._idProdotto;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get categoria(): number {
        return this._categoria;
    }

    public set categoria(categoria: number) {
        this._categoria = categoria;
    }

    public get percorso(): string {
        return this._percorso;
    }

    public set percorso(percorso: string) {
        this._percorso = percorso;
    }

    public get prezzo(): number {
        return this._prezzo;
    }

    public set prezzo(prezzo: number) {
        this._prezzo = prezzo;
    }


}