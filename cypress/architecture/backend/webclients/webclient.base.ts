import { Env } from "../../env/environment.base";
import { ModelBase } from "../../models/model.base";
import { Logger } from "../../utils/logger";

export class WebClientBase {

    static Request(method: string, urlSuffix: string, object: ModelBase) {

        Logger.LogRequestBody(object.payload)

        return cy.request({

            method: method,
            url: `${Env.baseUrl}${urlSuffix}`,
            failOnStatusCode: false,
            body: object.payload,
            headers: { 'Bearer': `bearer ${Cypress.env(`bearer`)}`, },
            
        }).then((response) => {

            Logger.LogResponseBody(response)
            object.BuildResponse(response)

        });
        
    }

}