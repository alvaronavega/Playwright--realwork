import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.page';
import { secrets } from '../fixtures/secrets.fixture';

test.beforeEach(async ({ page }, testInfo) => {
  let sec = new secrets();
  const loginpage = new loginPage(page);
  console.log(`Running ${testInfo.title}`);
  await loginpage.login(sec.username, sec.password);
});

test.describe('Criar e validar processo', () => {
  test('Acessar a pagina e criar o processo', async ({ page }) => {
    
  })
});
