import EnvVariables from "../../utils/env.variables";

class CommonPage {
  //ELEMENTS
  //TITLE
  private titleTxt(value: string) {
    return "//p[contains(text(),'#')]".replace("#", value);
  }

  //MENU
  private menuOption(value: string) {
    return "//div[@data-testid='menu']//p[contains(text(),'#')]".replace(
      "#",
      value
    );
  }

  //ACTIONS
  //TITLE
  async waitFormTitleTxt(expectedTxt: string, timeout: number) {
    return await (
      await $(this.titleTxt(expectedTxt))
    ).waitForDisplayed({ timeout: timeout });
  }

  //MENU
  async waitMenuOption(expectedTxt: string, timeout: number) {
    return await (
      await $(this.menuOption(expectedTxt))
    ).waitForDisplayed({ timeout: timeout });
  }
  async clickMenuOption(expectedTxt: string) {
    await this.waitMenuOption(expectedTxt, 20000);
    await (await $(this.menuOption(expectedTxt))).click();
  }

  //WINDOWS
  async reopenWindowNoCache() {
    await browser.clearLocalStorage();
    await browser.clearSessionStorage();
    await browser.closeWindow();
    await browser.newWindow(EnvVariables.envs().baseUrl);
  }
  async backToTYBPageTab() {
    await browser.switchWindow(EnvVariables.envs().baseUrl);
  }
}
export default new CommonPage();
