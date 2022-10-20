import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.page';
import { secrets } from '../fixtures/secrets.fixture';
import { perfilPage } from '../pages/perfil.page';
import { cadProcessPage } from '../pages/cadProcess.page';

test.beforeEach(async ({ page }, testInfo) => {
  const sec = new secrets();
  const loginpage = new loginPage(page);
  console.log(`Running ${testInfo.title}`);
  await loginpage.login(sec.userAdm, sec.passAdm);
  await page.context().storageState({ path: 'storageState.json' });

});

//test.afterAll(async ({ page }) => {
//  const fs = require('fs');
//  const filePath = 'storageState.json';
//  fs.unlinkSync(filePath);
//  await page.context().clearCookies();
//});

test.describe('Criar e validar processo', () => {
  test.skip('Validar perfil', async ({ page }) => {
    const perfilpage = new perfilPage(page);
    await perfilpage.menuSec.click();
    await perfilpage.dropdownPerfil.click();
    await perfilpage.menuUsuarioPerfil.click();

  })
  test('Criar process', async ({ page }) => {
    //const sec = new secrets();
    // loginpage = new loginPage(page);
    //await loginpage.login(sec.userAdm, sec.passAdm);
    const cadproceso = new cadProcessPage(page);
    await cadproceso.acessoCadastroProcesso();

    cadproceso.assuntoFill('[aria-label="Código\\: 1\\, Assunto\\: Acesso à internet\\, correio eletrônico e convênios\\, Grupo\\: Solicitação de Acesso aos Sistemas\\, "]');

  })
});
