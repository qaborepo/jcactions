import EnvVariables from "../utils/env.variables";

class BrowserOptions {
  options(browser: string) {
    let options: string[];

    switch (browser.toLowerCase()) {
      case "chrome": {
        if (EnvVariables.envs().isHeadless) {
          options = [
            "--no-sandbox",
            "--disable-infobars",
            "--headless",
            "--disable-gpu",
            "--window-size=1440,735",
          ];
        } else {
          options = [
            "--no-sandbox",
            "--disable-infobars",
            "--window-size=1440,735",
          ];
        }
        return options;
      }
    }
  }
}
export default new BrowserOptions();
