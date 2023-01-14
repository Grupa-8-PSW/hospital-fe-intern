import { BloodBank } from "./bloodBank.model";

export class BloodBankNews {
    id: number = 0;
    subject: string = '';
    text: string = '';
    bloodBank!: BloodBank;
    imgSrc!: string;
    published!: boolean;
    archived!: boolean;
    bloodBankId!: number;

    public constructor(obj?: any) {
        if (obj) {
            this.text = obj.text;
            this.id = obj.id;
            this.subject = obj.subject;
            this.bloodBank = obj.bloodBank;
            this.imgSrc = obj.imgSrc;
            this.archived = obj.archived;
            this.published = obj.published;
            this.bloodBankId = obj.bloodBankId;
        }
    }
}