import LoginPage from "../pageobjects/login.page";
import CommonPage from "../pageobjects/common.page";
import * as assertion from "soft-assert";

describe("Negative Login scenarios in the Business View", () => {
  beforeEach("Navigate to business login page", async () => {
    await LoginPage.navToLoginPageBusinessView();
  });
  afterEach("Navigate to business login page", async () => {
    await assertion.softAssertAll();
  });

  describe("Empty email", () => {
    it("Should Validate as field required", async () => {
      await LoginPage.doLogin("");
      await assertion.softAssert(
        await LoginPage.getEmailValidationMessage(),
        "This field is required",
        "Field Required Error"
      );
      await assertion.deeptTrue(
        await CommonPage.waitFormTitleTxt("First, enter your email", 2000),
        "Form Title Error"
      );
    });

    describe("Invalid email", () => {
      it("Should Validate as invalid email", async () => {
        await LoginPage.doLogin("invalidemail.com");
        await assertion.softAssert(
          await LoginPage.getEmailValidationMessage(),
          "Enter a valid e-mail address",
          "Field Required Error"
        );
        await assertion.deeptTrue(
          await CommonPage.waitFormTitleTxt("First, enter your email", 2000),
          "Form Title Error"
        );
      });
    });
  });
});
