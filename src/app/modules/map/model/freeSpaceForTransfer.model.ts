export class FreeSpaceForTransfer {

    dateFrom: Date;
    dateTo: Date;
    duration: number;

    public constructor(obj?: any) {
        if (obj) {
            this.dateFrom = obj.dateFrom;
            this.dateTo = obj.dateTo;
            this.duration = obj.duration;
        }
    }
}