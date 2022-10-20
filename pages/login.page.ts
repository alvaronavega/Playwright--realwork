import { test, expect, Locator, Page } from '@playwright/test';
import { secrets } from '../fixtures/secrets.fixture';

export class loginPage {
    readonly sec = new secrets();
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
        this.url = this.sec.url;
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

