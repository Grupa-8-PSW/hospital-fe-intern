import { BloodType } from "./patient";

export class BloodAmount {
    bloodType: BloodType | undefined;
    amount: any;
    price: any;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodType = obj.bloodType;
            this.amount = obj.amount;
            this.price = obj.price;
            
        }
    }
}
