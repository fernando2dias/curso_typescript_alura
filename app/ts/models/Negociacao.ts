class Negociacao{

    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        if(!data){
            throw new Error('Data deve ser preenchida');
        }

        if(!quantidade){
            throw new Error('Quantidade deve ser preenchida');
        }

        if(!valor){
            throw new Error('Valor deve ser preenchida');
        }

    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor; 
    }

}