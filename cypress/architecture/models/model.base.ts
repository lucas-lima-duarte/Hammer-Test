import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';


export class ModelBase {

    // Instance Proprieties
    id: number
    guidId: string
    code?: string
    name: string

    //Requests Proprieties
    statusText: string
    payload: any
    response: Cypress.Response<any>

    constructor() {
        this.code = `cypc0d3-${uuidv4()}`
        this.name = `${faker.person.fullName()}`
    }

    BuildResponse(response: Cypress.Response<any>) {
        this.response = response
    }

    BuildRequestPayload(fixture) {
        this.payload = fixture
    }
}