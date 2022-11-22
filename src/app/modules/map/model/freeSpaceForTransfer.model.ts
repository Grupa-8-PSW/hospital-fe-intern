export class FreeSpaceForTransfer {
    startTime: Date;
    endTime: Date;

    public constructor(obj?: any) {
        if (obj) {
            this.startTime = obj.startTime;
            this.endTime = obj.endTime;
        }
    }
}