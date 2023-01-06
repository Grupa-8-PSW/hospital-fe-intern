export class Form {
    roomId: number = 0;
    name: string = "";
    description: string = "";
    startHourWorkDay: number = 0;
    endHourWorkDay: number = 0;
    startHourSaturday: number = 0;
    endHourSaturday: number = 0;
    startHourSunday: number = 0;
    endHourSunday: number = 0;


    public constructor(obj?: any) {
        if (obj) {
            this.roomId = obj.roomId;
            this.name = obj.name;
            this.description = obj.description;
            this.startHourWorkDay = obj.startHourWorkDay;
            this.endHourWorkDay = obj.endHourWorkDay;
            this.startHourSaturday = obj.startHourSaturday;
            this.endHourSaturday = obj.endHourSaturday;
            this.startHourSunday = obj.startHourSunday;
            this.endHourSunday = obj.endHourSunday;
        }
    }
}