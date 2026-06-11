import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../support/pages/login';

Given('Acesso a página de login {string}', async function (url: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.go(url);
});

When('preencho o campo de username {string} e password {string}',async function (username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.form(username, password);
  }
);

When('clico no botão de login', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.clickLogin();
});

When('clico no botão de logout', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.clickLogout();
});

Then('devo ver a mensagem {string}', async function (message: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.ValidateMessage(message);
});