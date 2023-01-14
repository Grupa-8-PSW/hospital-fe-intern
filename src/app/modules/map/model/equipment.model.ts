export class Equipment {
    equipmentId: number = 0;
    name: string = "";
    amount: number = 0;
    roomId: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.equipmentId = obj.equipmentId;
            this.name = obj.name;
            this.amount = obj.amount;
            this.roomId = obj.roomId;
        }
    }
}