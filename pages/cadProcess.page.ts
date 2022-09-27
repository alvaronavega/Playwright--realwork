import { test, expect, Locator, Page } from '@playwright/test';
export class cadProcessPage {
    readonly menuCadProcesso: Locator;
    readonly pesqAssunto: Locator;
    readonly tipoProcesso: Locator;
    readonly palavraChave: Locator;
    readonly tarjas: Locator;
    readonly municipio: Locator;
    readonly nomeInteressado: Locator;
    readonly tipoSigilo: Locator;
    readonly dadosExpediente: Locator;
    readonly bntConcuir: Locator;
    readonly bntLimpar: Locator;
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        this.menuCadProcesso = page.locator('#cadastroProcesso');
        this.pesqAssunto = page.locator('#pesqAssunto');
        this.tipoProcesso = page.locator('#tipoProcesso');
        this.palavraChave = page.locator('#palavraChave');
        this.tarjas = page.locator('#tarjas');
        this.municipio = page.locator('#municipio');
        this.nomeInteressado = page.locator('#nomeInteressado');
        this.tipoSigilo = page.locator('#tipoSigilo');
        this.dadosExpediente = page.locator('#dadosExpediente');
        this.bntConcuir = page.locator('#btnConcluir');
        this.bntLimpar = page.locator('#btnLimpar');
    }

}