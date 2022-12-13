import { BloodAmount } from "./bloodAmount";
import { BloodType } from "./patient";

export class TenderOffer {
    public bloodAmounts: BloodAmount[] = [];
    public price: any;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodAmounts = obj.bloodAmounts;
            this.price = obj.price;
        }
    }
}
