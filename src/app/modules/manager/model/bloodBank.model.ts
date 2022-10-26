export class BloodBank {
    id: number = 0;
    name: string = '';
    email: string = '';
    serverAddress: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.serverAddress = obj.serverAddress;        
        }
    }
}