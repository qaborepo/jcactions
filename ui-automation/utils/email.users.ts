import EnvVariables from "./env.variables";

const now = Date.now();

class EmailUsers {
    createNewEmail() {
      return EnvVariables.envs().testMailNameSpace+"."+now+EnvVariables.envs().testMailHost;
    }
    createUserName() {
      return "User Test Automation "+now+" "+EnvVariables.envs().testMailHost;
    }
  }
export default new EmailUsers();
  