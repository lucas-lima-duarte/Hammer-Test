const prettier = require('prettier');


export class Logger {
    static LogResponseBody(response) {
        if (Cypress.env('debug')) {
            const jsonString = `**Response body:** ${JSON.stringify(response.body, null, 2)}`;
            cy.log(jsonString);
        }

    }
    static LogRequestBody(payload) {
        if (Cypress.env('debug'))
            cy.log(`**Request body:** ${JSON.stringify(payload, null, 2)}`)
    }
}