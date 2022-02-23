export class Utente {
        
    constructor(
        private _idUtente : string,
        private _nome : string,
        private _cognome : string,
        private _piva : string,
        private _codfiscale : string,
        private _tipoUtente : string,
        private _nazione : string,
        private _via : string,
        private _cap : string,
        private _comune : string,
        private _provincia : string,
        private _telefono : string,
        private _email : string,
        private _username : string,
        private _password : string)
        {
        this._idUtente = _idUtente;
        this._nome = _nome;
        this._cognome = _cognome;
        this._piva = _piva;
        this._codfiscale = _codfiscale;
        this._tipoUtente = _tipoUtente;
        this._nazione = _nazione;
        this._via = _via;
        this._cap = _cap;
        this._comune = _comune;
        this._provincia = _provincia;
        this._telefono = _telefono;
        this._email = _email;
        this._username = _username;
        this._password = _password;
    } 
    
    public get idUtente(): string {
        return this._idUtente;
    }

    public set idUtente(idUtente: string) {
        this._idUtente = idUtente;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get cognome(): string {
        return this._cognome;
    }

    public set cognome(cognome: string) {
        this._cognome = cognome;
    }

    public get piva(): string {
        return this._piva;
    }

    public set piva(piva: string) {
        this._piva = piva;
    }

    public get codfiscale(): string {
        return this._codfiscale;
    }

    public set codfiscale(codfiscale: string) {
        this._codfiscale = codfiscale;
    }

    public get tipoUtente(): string {
        return this._tipoUtente;
    }

    public set tipoUtente(tipoUtente: string) {
        this._tipoUtente = tipoUtente;
    }

    public get nazione(): string {
        return this._nazione;
    }

    public set nazione(nazione: string) {
        this._nazione = nazione;
    }

    public get via(): string {
        return this._via;
    }

    public set via(via: string) {
        this._via = via;
    }

    public get cap(): string {
        return this._cap;
    }

    public set cap(cap: string) {
        this._cap = cap;
    }

    public get comune(): string {
        return this._comune;
    }

    public set comune(comune: string) {
        this._comune = comune;
    }

    public get provincia(): string {
        return this._provincia;
    }

    public set provincia(provincia: string) {
        this._provincia = provincia;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public set telefono(telefono: string) {
        this._telefono = telefono;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        this._username = username;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }
}