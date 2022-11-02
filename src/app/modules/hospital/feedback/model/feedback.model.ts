export class Feedback implements IFeedback {

    public id: number = 0;
    public patientFullName: string = "";
    public text: string = "";
    public rating: number = 0;
    public creationDate: Date = new Date();
    public isPublic: boolean = false;
    public status: FeedbackStatus = FeedbackStatus.OnHold;

    constructor(feedback: IFeedback) {
        this.id = feedback.id;
        this.patientFullName = feedback.patientFullName;
        this.text = feedback.text;
        this.rating = feedback.rating;
        this.creationDate = feedback.creationDate;
        this.isPublic = feedback.isPublic;
        this.status = feedback.status;
    }

}

interface IFeedback {
    id: number;
    patientFullName: string;
    text: string;
    rating: number;
    creationDate: Date;
    isPublic: boolean;
    status: FeedbackStatus;
}

export enum FeedbackStatus { OnHold, Approved, Denied }