import LoginPage from "../pageobjects/login.page";
import WebhookPage from "../pageobjects/webhook.page";
import CommonPage from "../pageobjects/common.page";
import TestMailService from "../../services/testmail.service";
import * as assertion from "soft-assert";
import { expect } from "chai";
import RegisterPage from "../pageobjects/register.page";

let email: { text: any; }[];

describe("Success Login", () => {
  describe("New User", () => {
    it("Should Redirect to the register page", async () => {
      await LoginPage.navToLoginPageBusinessView();
      await WebhookPage.navToWebHook();
      await WebhookPage.getWebHookEmail();
      await LoginPage.doLogin(browser.capabilities["userEmail01"]);
      expect(
        await CommonPage.waitFormTitleTxt("Check your inbox", 200000),
        "Form Title Error magic link"
      );
      await WebhookPage.accessReceivedTYBEmail();
      expect(
        await CommonPage.waitFormTitleTxt("logged into TYB", 200000),
        "Form Title Error magic link"
      );
      expect(
        await CommonPage.waitFormTitleTxt(
          "Go back to your original tab",
          200000
        ),
        "Form Title Error magic link"
      );
      await CommonPage.backToTYBPageTab();

      await assertion.deeptTrue(
        await CommonPage.waitFormTitleTxt("Email confirmed!", 200000),
        "Form Title Error magic link"
      );
      await assertion.deeptTrue(
        await CommonPage.waitFormTitleTxt("get started", 200000),
        "Form Title Error magic link"
      );

      await assertion.softAssertAll();
    });
  });

  describe("Existent User", () => {
    it("Should Redirect to the Main page", async () => {
      let userEmail = browser.capabilities["userEmail01"];

      await LoginPage.navToLoginPageBusinessView();
      await LoginPage.doLogin(userEmail);
      email = await TestMailService.waitTYBEmail(userEmail, "Log in to TYB");
      expect(email.length).to.greaterThan(0);

      await LoginPage.accessReceivedTYBEmail(email[0].text);
      await CommonPage.backToTYBPageTab();
      await CommonPage.waitFormTitleTxt("Email confirmed!", 200000);
      await RegisterPage.registerUser(browser.capabilities["userName01"]);

      assertion.deeptTrue(
        await CommonPage.waitFormTitleTxt(browser.capabilities["userName01"], 200000),
        "Main Page Form Title"
      );
      assertion.deeptTrue(
        await CommonPage.waitMenuOption(browser.capabilities["userName01"], 200000),
        "Menu Page Form Title"
      );

      await assertion.softAssertAll();
    });
  });
});
