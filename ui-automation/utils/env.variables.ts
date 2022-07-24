import * as configEnv from "../config.env.json";

class EnvVariables {
    
    envs() {
        if (!process.env.ENV_TYB) {
            console.log("Environment env not found, running in STG");
            return configEnv["STG"];
        } else {
            console.log("Environment env found, running in"+process.env.ENV_TYB);
            return configEnv[process.env.ENV_TYB]
        }
    };
}
export default new EnvVariables()