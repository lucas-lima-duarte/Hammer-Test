export function SelectEnvironmentValue(dev, hml, stag, prod, local) {
    switch (Cypress.env('env')) {
        case 'dev':
            if (dev == null) throw new Error("Null environment variable");
            else return dev
        case 'hml':
            if (hml == null) throw new Error("Null environment variable");
            else return hml
        case 'stag':
            if (stag == null) throw new Error("Null environment variable");
            else return hml
        case 'prod':
            if (prod == null) throw new Error("Null environment variable");
            else return prod
        case 'local':
            if (local == null) throw new Error("Null environment variable");
            else return local
        default: throw new Error("Env not found");
    }
}