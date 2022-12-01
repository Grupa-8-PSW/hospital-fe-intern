export class Credentials implements ICredentials {
    username: string = "";
    password: string = "";

    constructor() {
        
    }
    
}

export interface ICredentials {
    username: string,
    password: string
};