import { env } from 'process';
import EnvVariables from "../../utils/env.variables";

class WebhookPage {
    private get tybReceivedEmailTxt() {return $("//pre[contains(.,'TYB')]")};
    private get emailTxt() {return $("//code[contains(text(),'email.webhook')]")};

    async navToWebHook () {
        await browser.newWindow(EnvVariables.envs().webHookUrl);
    }

    async navToWebhookTab () {
        await browser.switchWindow(EnvVariables.envs().webHookUrl);
    }
    async accessReceivedTYBEmail () {
        await this.navToWebhookTab();
        await (await this.tybReceivedEmailTxt).waitForDisplayed({timeout: (EnvVariables.envs().secondsTimeOutTYBEmail*1000)});
        var email = await this.tybReceivedEmailTxt.getText();
        var magicLink = email.split("(")[1].split(")")[0].trim();
        await browser.navigateTo(magicLink)
    }
    async getWebHookEmail () {
        browser.capabilities["userEmail01"] = await this.emailTxt.getText();
    }
}
export default new WebhookPage()