import { BloodType } from "./BloodType";
import { Moment } from "moment-timezone";


export default interface BloodUnitRequest {
  id: number;
  type: string;
  amount: number;
  reason: string;
  creationDate: Moment;

}
