import { BloodAmount } from "./bloodAmount";
import { BloodType } from "./patient";

export class UrgentRequestBloodBankStatistic {
    public quantities: number[] = [];
    public bloodBanks: string[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.quantities = obj.quanitities;
            this.bloodBanks = obj.bloodBanks;
        }
    }
}
