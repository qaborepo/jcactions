import RequestTyb from "../../core/rest_api/requestTyb";
import graphqlRoute from "../../resources/routes/graphql";
import { schema as graphqlSchema } from "../../resources/data_test/graphql/queries";
import { schema as expectedGraphqlSchema } from "../../resources/data_test/schemas/graphql";
import Ajv from "ajv";

describe("Graphql schema", () => {
    let ajv: Ajv;
    let requestTyb: RequestTyb;
    
    beforeAll(() => {
        ajv = new Ajv();
        requestTyb = new RequestTyb();
    });

    test("graphql schema", async () => {
        const graphqlResponse = await requestTyb.post(graphqlRoute.graphql, graphqlSchema);
        expect(graphqlResponse.statusCode).toBe(200);
        const validate = ajv.validate(expectedGraphqlSchema, graphqlResponse.body);
        expect(validate).toBe(true);
    })
})