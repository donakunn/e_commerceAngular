export class Categoria {

    private _idCategoria: string;
    private _nome : string;
    private _percorso : string;

    constructor(idCategoria : string, nome : string, percorso : string){
        this._idCategoria = idCategoria;
        this._nome = nome;
        this._percorso = percorso;
    }

    public get idCategoria(): string {
        return this._idCategoria;
    }
    
    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }
    public get percorso(): string {
        return this._percorso;
    }

    public set percorso(percorso: string) {
        this._percorso = percorso;
    }
}