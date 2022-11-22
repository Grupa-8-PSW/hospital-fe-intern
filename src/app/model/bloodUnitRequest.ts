import { BloodType } from "./bloodType";
import { BloodUnitRequestStatus } from "./bloodUnitRequestStatus";
import Doctor from "./doctor";

export interface BloodUnitRequest {
    Id: number,
    Type: BloodType,
    AmountL: number,
    Reason: string,
    CreationDate: Date,
    Doctor: Doctor,
    DoctorId: number,
    ManagerComment: string,
    Status: BloodUnitRequestStatus
}