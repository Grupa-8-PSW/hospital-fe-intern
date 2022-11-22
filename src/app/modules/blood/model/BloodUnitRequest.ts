import { BloodType } from "./BloodType";
import { Moment } from "moment-timezone";
import { BloodUnitRequestStatus } from "./BloodUnitRequestStatus";

type Nullable<T> = T | null;
export default interface BloodUnitRequest {
  id: Nullable<number>;
  type: string;
  amountL: number;
  reason: string;
  creationDate: Moment;
  doctorId: number;
  status: BloodUnitRequestStatus;
  managerComment: string;

}
