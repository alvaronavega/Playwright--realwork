import { test, expect, Locator, Page } from '@playwright/test';
export class cadProcessPage {
    readonly menuCPA: Locator;
    readonly menuCadProcesso: Locator;
    readonly assunto: Locator;
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
        this.menuCPA = page.frameLocator('[aria-label="menu"]').locator('#link_Modulo_64_1 >> text=CPA');
        this.menuCadProcesso = page.frameLocator('[aria-label="menu"]').locator('#itemMenu_64_1_2029');
        this.assunto = page.frameLocator('iframe[name="page"]').locator('text=Assunto principal:​​ >> [aria-label="Abrir modal de consulta"]');
        this.tipoProcesso = page.locator('#tipoProcesso');
        this.palavraChave = page.frameLocator('iframe[name="page"]').locator('#tags div:has-text("Palavra chave")');
        this.tarjas = page.locator('#tarjas');
        this.municipio = page.locator('#municipio');
        this.nomeInteressado = page.locator('#nomeInteressado');
        this.tipoSigilo = page.locator('#tipoSigilo');
        this.dadosExpediente = page.locator('#dadosExpediente');
        this.bntConcuir = page.locator('#btnConcluir');
        this.bntLimpar = page.locator('#btnLimpar');
    }
    async acessoCadastroProcesso() {
        await this.menuCPA.click();
        await this.menuCadProcesso.click();
   }
    async assuntoFill(assunto: string) {
        await this.assunto.click();
        // asunto
        // '[aria-label="Código\\: 1\\, Assunto\\: Acesso à internet\\, correio eletrônico e convênios\\, Grupo\\: Solicitação de Acesso aos Sistemas\\, "]'
        await this.page.frameLocator('iframe[name="page"]').locator(assunto).check();
        await this.page.frameLocator('iframe[name="page"]').locator('button:has-text("Selecionar")').click();
    }
    async palavraChaveFill(palavraChave: string) {
        this.palavraChave.click();
        //palavrachave = AUROMACAO
        await this.palavraChave.fill(palavraChave);
        await this.page.frameLocator('iframe[name="page"]').locator('#react-select-4-option-0').click()
    }



}