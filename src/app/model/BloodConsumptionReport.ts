export class BloodConsumptionReport {
    startTime: string = '';
    startDate: string = '';
    frequencyPeriodInHours: Int32Array | undefined;
    ConsumptionPeriodHours: Int32Array | undefined;
    

    public constructor(obj?: any) {
        if (obj) {
            this.startTime = obj.startTime;
            this.startDate = obj.startDate;
            this.frequencyPeriodInHours = obj.frequencyPeriodInHours;
            this.ConsumptionPeriodHours = obj.ConsumptionPeriodHours;
        }
    }
}
