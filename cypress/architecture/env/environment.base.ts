import { BaseUrl } from "./baseUrl.env"

export class EnvironmentBase {

    baseUrl: BaseUrl

    /**
     *
     */
    constructor() {

        this.baseUrl = new BaseUrl()
        
    }
}

export const Env = new EnvironmentBase()