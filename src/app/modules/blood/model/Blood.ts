import { BloodType } from "./BloodType";

export default interface Blood {
  id: number;
  type: BloodType;
  quantity: number;
}
