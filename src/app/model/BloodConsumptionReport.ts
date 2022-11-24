export class BloodConsumptionReport {
    startTime: string = '';
    startDate: string = '';
    frequencyPeriodInHours: Uint32Array | undefined;
    ConsumptionPeriodHours: Uint32Array | undefined;
    

    public constructor(obj?: any) {
        if (obj) {
            this.startTime = obj.startTime;
            this.startDate = obj.startDate;
            this.frequencyPeriodInHours = obj.frequencyPeriodInHours;
            this.ConsumptionPeriodHours = obj.ConsumptionPeriodHours;
        }
    }
}
