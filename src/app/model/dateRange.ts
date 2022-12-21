export default class DateRange{
    start: Date | null;
    end: Date | null;

    constructor(start: Date | null, end: Date | null){
        this.start = start;
        this.end = end;
    }
}