// Page Object Model for DemoQA Text Box Page
export class DemoQATextBoxPage {
  constructor(page) {
    this.page = page;
    
    // Locators
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.outputSection = page.locator('#output');
  }

  // Actions
  async navigateToTextBox() {
    await this.page.goto('https://demoqa.com/text-box');
    await this.page.waitForLoadState('networkidle');
  }

  async fillFullName(fullName) {
    await this.fullNameInput.fill(fullName);
    console.log(`✓ Filled Full Name: ${fullName}`);
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
    console.log(`✓ Filled Email: ${email}`);
  }

  async fillCurrentAddress(address) {
    await this.currentAddressInput.fill(address);
    console.log(`✓ Filled Current Address: ${address}`);
  }

  async fillPermanentAddress(address) {
    await this.permanentAddressInput.fill(address);
    console.log(`✓ Filled Permanent Address: ${address}`);
  }

  async fillAllFields(testData) {
    await this.fillFullName(testData.fullName);
    await this.fillEmail(testData.email);
    await this.fillCurrentAddress(testData.currentAddress);
    await this.fillPermanentAddress(testData.permanentAddress);
  }

  async clickSubmit() {
    await this.submitButton.click();
    await this.page.waitForTimeout(1000);
    console.log('✓ Submit button clicked');
  }

  async isOutputVisible() {
    await this.outputSection.waitFor({ state: 'visible', timeout: 5000 });
    console.log('✓ Output section is visible');
    return true;
  }

  async getOutputText() {
    return await this.outputSection.textContent();
  }

  async verifySubmittedData(testData) {
    const outputText = await this.getOutputText();
    console.log('Output text:', outputText);
    
    const expectedValues = [
      `Name:${testData.fullName}`,
      `Email:${testData.email}`,
      `Current Address :${testData.currentAddress}`,
      `Permanent Address :${testData.permanentAddress}`
    ];

    const results = expectedValues.map(value => ({
      value,
      found: outputText.includes(value)
    }));

    return results;
  }
}
