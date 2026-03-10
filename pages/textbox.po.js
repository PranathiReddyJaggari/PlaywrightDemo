import { test, expect } from "@playwright/test";
import { emitKeypressEvents } from "node:readline";

export class textPage {
  constructor(page) {
    this.page = page;
    this.unInput = page.locator(`#userName`);
    this.ueInput = page.locator(`#userEmail`);
    this.caInput = page.locator(`#currentAddress`);
    this.paInput = page.locator(`#permanentAddress`);
    this.submitbtn = page.locator(`#submit`);
    this.displayName = page.locator(`#name`);
    this.displayEmail = page.locator(`#email`);
    this.displayCA = page.locator(`//p[@id="currentAddress"]`);
    this.displayPA = page.locator(`//p[@id="permanentAddress"]`);
  }

  async URL() {
    this.page.goto(`https://demoqa.com/text-box`);
  }

  async fillDetails(name, email, currentAddress, permanentAddress) {
    await this.unInput.fill(name);
    await this.ueInput.fill(email);
    await this.caInput.fill(currentAddress);
    await this.paInput.fill(permanentAddress);
    await this.submitbtn.click();
  }

  async verifyDetails(name, email, currentAddress, permanentAddress) {
    await expect(this.displayName).toContainText(name);
    await expect(this.displayEmail).toContainText(email);
    await expect(this.displayCA).toContainText(currentAddress);
    await expect(this.displayPA).toContainText(permanentAddress);
  }
}
