import { test, expect, Locator, Page } from '@playwright/test';

export class loginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly btnEntrar: Locator;
    readonly title: Locator;
    readonly page: Page;
    readonly url: string;
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#j_username');
        this.password = page.locator('#j_password');
        this.btnEntrar = page.locator('#submit');
        this.title = page.locator('.titleLogin');
        this.url = 'http://tjsp-itg.ungp.softplan.com.br/sajadm/';
    }
    async login(username: string, password: string) {
        await this.page.goto(this.url);
        await expect(this.title).toHaveText('Entre com sua conta');
        await this.username.fill(username);
        await this.password.fill(password);
        await this.btnEntrar.click();
        //checkpoint
        await expect(this.page.frameLocator('[aria-label="cabeçalho"]').locator('#countNotificacoes')).toBeVisible();
             
    }
}