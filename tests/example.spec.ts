import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.page';

test.beforeEach(async ({ page }, testInfo) => {
  const loginpage = new loginPage(page);
  console.log(`Running ${testInfo.title}`);
  await loginpage.login('sajadm', '123');
});

test.describe('Validação do processo', () => {
  test('Login Sajadm', async ({ page }) => {
    
  })
});
