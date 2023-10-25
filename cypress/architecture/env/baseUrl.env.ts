import { SelectEnvironmentValue } from "../utils/select-environment"

export class BaseUrl {

    baseUrl: string

    /**
     *
     */
    constructor() {
        SelectEnvironmentValue(
            `https://localhost:8080`,
            `https://localhost:8080`,
            `https://localhost:8080`,
            `https://localhost:8080`,
            `https://localhost:8080`
            )
    }

}