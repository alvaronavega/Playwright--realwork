import { test, expect, Locator, Page } from '@playwright/test';
export class perfilPage {
    readonly page: Page;
    menuSec: Locator;
    dropdownPerfil: Locator;
    menuUsuarioPerfil: Locator;
    constructor(page: Page) {
        this.page = page;
        this.menuSec = page.frameLocator('[aria-label="menu"]').locator('p:has-text("SEG")');
        this.dropdownPerfil = page.frameLocator('[aria-label="menu"]').locator('#nomeGrupo_0_2_36');
        this.menuUsuarioPerfil = page.frameLocator('[aria-label="menu"]').locator('#itemMenu_0_2_38');
    }
}
