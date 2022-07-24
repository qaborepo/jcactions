import * as request from "supertest";
const baseUrl = process.env.BASE_URL + (process.env.API_VERSION || '');

export default class RequestTyb {
    private headers: object[];

    constructor() {
        this.headers = [];
    }

    public addHeader(header: object): void {
        this.headers.push(header);
    }

    private setHeadersToRequest(request: request.Test): request.Test {
        this.headers.forEach(header => request = request.set(header));
        return request;
    }

    public get(route: string): request.Test {
        let getRequest = request(baseUrl)
            .get(route);
        getRequest = this.setHeadersToRequest(getRequest);
        return getRequest;
    }

    public post(route: string, body: object): request.Test {
        let postRequest = request(baseUrl)
        .post(route)
        .send(body);
        postRequest = this.setHeadersToRequest(postRequest);
        return postRequest;
    }

    public postFormData(route: string, fields: object): request.Test {
        let postRequest = request(baseUrl)
            .post(route);
        for (const field in fields) {
            postRequest = postRequest.field(field, fields[field]);
        }
        return this.setHeadersToRequest(postRequest);

    }
    
    public put(route: string, body: object): request.Test {
        let putRequest = request(baseUrl)
            .put(route)
            .send(body);
            return this.setHeadersToRequest(putRequest);
    }

    public delete(route: string): request.Test {
        let deleteRequest = request(baseUrl)
            .delete(route);
            return this.setHeadersToRequest(deleteRequest);
    }

    public patch(route: string, body: object): request.Test {
        let patchRequest = request(baseUrl)
            .patch(route)
            .send(body);
            return this.setHeadersToRequest(patchRequest);
    }

}