import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.page';
import { secrets } from '../fixtures/secrets.fixture';
import { perfilPage } from '../pages/perfil.page';

test.beforeEach(async ({ page }, testInfo) => {
  const sec = new secrets();
  const loginpage = new loginPage(page);
  console.log(`Running ${testInfo.title}`);
  await loginpage.login(sec.userAdm, sec.passAdm);
 // await page.context().storageState({ path: 'storageState.json' });

});

test.afterAll(async ({ page }) => {
  const fs = require('fs');
  const filePath = 'storageState.json';
  fs.unlinkSync(filePath);
  await page.context().clearCookies();
});
test.describe('Criar e validar processo', () => {
  test('Validar perfil', async ({ page }) => {
    const perfilpage = new perfilPage(page);
    await perfilpage.menuSec.click();
    await perfilpage.dropdownPerfil.click();
    await perfilpage.menuUsuarioPerfil.click();

  })
});
