import { Moment } from "moment-timezone";
import Patient, { BloodType } from "./patient";
import { SubscriptionStatus } from "./subscriptionStatus";

export default interface BloodOrder {
    bloodType: BloodType,
    quantity: number,
    bankName: string,
    deliveryDate: Moment,
    orderStatus: SubscriptionStatus
}
