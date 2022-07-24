//login.page.js

class RegisterPage {
    private get  inputUserName() { return  $("input[name='username']")}
    private get continueButton() {return $("button[type='submit']")};
    private get userNameRequiredFieldTxt() {return $("//input[@name='username']/..//p")};

    async registerUser (userName: string) {
        await (await this.inputUserName).setValue(userName);
        await (await this.continueButton).click();
    }
    async getEmailValidationMessage () {
        return await (await this.userNameRequiredFieldTxt).getText();
    }
}
export default new RegisterPage()