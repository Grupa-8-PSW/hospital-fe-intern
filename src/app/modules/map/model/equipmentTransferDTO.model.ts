export class EquipmentTransferDTO {

    amount: number;
    fromRoomId: number;
    toRoomId: number;
    startDate: Date;
    endDate: Date;
    duration: number;

    public constructor(obj?: any) {
        if (obj) {
            this.amount = obj.amount;
            this.fromRoomId = obj.fromRoomId;
            this.toRoomId = obj.toRoomId;
            this.startDate = obj.startDate;
            this.endDate = obj.endDate;
            this.duration = obj.duration;
        }
    }
}