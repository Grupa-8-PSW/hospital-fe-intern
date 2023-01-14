export class BloodBank {
    id: number = 0;
    name: string = '';
    email: string = '';
    serverAddress: string = '';
    apiKey: string = '';
    image: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.email = obj.email;
            this.id = obj.id;
            this.name = obj.name;
            this.serverAddress = obj.serverAddress;
            this.apiKey = obj.apiKey;
            this.image = obj.image;
        }
    }
}
