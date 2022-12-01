import Blood from "./blood";
import DateRange from "./dateRange";
import { TenderStatus } from "./tenderStatus";

export default class Tender{
    status: TenderStatus;
    dateRange: DateRange;
    blood: Blood[];

    constructor(status: TenderStatus, dateRange: DateRange, blood: Blood[]){
        this.status = status;
        this.dateRange = dateRange;
        this.blood = blood;
    }
}