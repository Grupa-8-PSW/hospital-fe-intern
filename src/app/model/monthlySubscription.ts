import Blood from "./blood";
import { BloodBank } from "./bloodBank.model";
import { SubscriptionStatus } from "./subscriptionStatus";

export default class MonthlySubscription{
    requestedBlood: Blood[];
    deliveryDate: Date;
    bank: BloodBank;
    bankId: Number
    status: SubscriptionStatus;

    constructor(requestedBlood: Blood[], deliveryDate: Date, bank: BloodBank, bankId: Number, status: SubscriptionStatus) {
        this.requestedBlood = requestedBlood;
        this.deliveryDate = deliveryDate;
        this.bank = bank;
        this.bankId = bankId;
        this.status = status;
    }
}