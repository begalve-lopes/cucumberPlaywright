import { expect, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async go(url: string) {
        await this.page.goto(url);
    }

    async form(username: string, password: string) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
    }

    async clickLogin() {
        await this.page.locator("button[type='submit']").click();
    }

    async clickLogout() {
        await this.page.locator('a[href="/logout"]').click();

    }

    async ValidateMessage(message: string) {
        const locator = this.page.locator('#flash');
        await expect(locator).toContainText(message);
    }
}