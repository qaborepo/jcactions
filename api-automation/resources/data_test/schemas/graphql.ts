export const schema = {
    type: "object",
    properties: {
        data: {
            type: "object",
            properties: {
                "__schema": {
                    type: "object",
                    properties: {
                        "queryType": {
                            type: "object",
                            properties: {
                                "name": { type: "string" }
                            },
                            required: ["name"],
                            additionalProperties: false
                        }
                    },
                    required: ["queryType"],
                    additionalProperties: false
                }
            },
            required: ["__schema"],
            additionalProperties: false
        }
    },
    required: ["data"],
    additionalProperties: false
};
