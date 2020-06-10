class NegociacoesView {
    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);

    }

    update(model: Negociacoes): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {
        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociocao =>
            `
                        <tr>
                            <td>${negociocao.data.getDate()} / ${negociocao.data.getMonth() + 1} / ${negociocao.data.getFullYear()}</td>
                            <td>${negociocao.quantidade}</td>
                            <td>${negociocao.valor}</td>
                            <td>${negociocao.volume}</td>

                        </tr>
                    `
        ).join('')}
            </tbody>

            <tfoot>
            </tfoot>

        </table>
        `;
    }

}

