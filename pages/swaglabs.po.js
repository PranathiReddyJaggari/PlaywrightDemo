import { test, expect } from "@playwright/test";

export class swaglabsLogin {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(`#user-name`);
    this.passwordInput = page.locator(`#password`);
    this.loginBtn = page.locator(`#login-button`);
    this.displayTitle = this.page.locator(`//span[@data-test="title"]`);
  }

  async LaunchURL() {
    this.page.goto(`https://www.saucedemo.com/`);
  }

  async fillDetails(ID, PS) {
    await this.usernameInput.fill(ID);
    await this.passwordInput.fill(PS);
    await this.loginBtn.click();
  }

  async displayPage() {
    await expect(this.displayTitle).toBeVisible();
  }
}
