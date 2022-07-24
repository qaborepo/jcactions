import CommonPage from "./common.page";
import EnvVariables from "../../utils/env.variables";

class MainPage {
    private get gearIcon() { return  $("input[name='email']")}
    private get logoutGearOption() {return $("button[type='submit']")};

    async navToLoginPageBusinessView () {
        await browser.navigateTo(EnvVariables.envs().baseUrl);
    }

    async doLogin (email: string) {
        console.log("user email TYB login: "+email);
        await CommonPage.backToTYBPageTab();
    //    await (await this.emailInput).setValue(email);
     //   await (await this.continueButton).click();
    }

    async getEmailValidationMessage () {
   //     return await (await this.emailRequiredFieldTxt).getText();
    }

    async accessReceivedTYBEmail (magicLinkText) {
        var magicLink = magicLinkText.split("(")[1].split(")")[0].trim();
        await browser.newWindow(magicLink);
    }
}
export default new MainPage()