import * as request from "supertest";
import EnvVariables from "../utils/env.variables";
import delay from "../utils/delay";

let emailResponse: any;
let retry = EnvVariables.envs().secondsTimeOutTYBEmail;

class TestMailService {
  async waitTYBEmail(email: string, subject: string) {
    while (retry > 0) {
      let emailsResponse = await this.request();
      await delay.for(1000);
      emailResponse = emailsResponse.filter(function (res) {
        return res.envelope_to.includes(email) && res.subject.includes(subject);
      });
      if (emailResponse.length > 0) {
        return emailResponse;
      } else {
        retry--;
      }
    }
  }

  private async request() {
    const response = await request(EnvVariables.envs().testMailBaseUrl)
      .get("/api/json")
      .query({
        apikey: EnvVariables.envs().testMailApiKey,
        namespace: EnvVariables.envs().testMailNameSpace,
        pretty: "true",
      });

    return response.body.emails;
  }
}

export default new TestMailService();
