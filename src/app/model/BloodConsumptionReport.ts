export class BloodConsumptionReport {
    startTime: string = '';
    startDate: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.startTime = obj.startTime;
            this.startDate = obj.startDate;
        }
    }
}
