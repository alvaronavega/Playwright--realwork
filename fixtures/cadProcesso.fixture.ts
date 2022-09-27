export class cadProcessPage {
    readonly pesqAssunto: string;
    readonly tipoProcesso: string;
    readonly palavraChave: string;
    readonly tarjas: string;
    readonly municipio: string;
    readonly nomeInteressado: string;
    readonly tipoSigilo: string;
    readonly dadosExpediente: string;
    readonly bntConcuir: string;
    readonly bntLimpar: string;
    constructor() {
        this.pesqAssunto = '#pesqAssunto';
        this.tipoProcesso = '#tipoProcesso';
        this.palavraChave = '#palavraChave';
        this.tarjas = '#tarjas';
        this.municipio = '#municipio';
        this.nomeInteressado = '#nomeInteressado';
        this.tipoSigilo = '#tipoSigilo';
        this.dadosExpediente = '#dadosExpediente';
        this.bntConcuir = '#btnConcluir';
        this.bntLimpar = '#btnLimpar';
    }

}