import { Moment } from "moment-timezone";
import Patient from "./patient";

export default interface TreatmentHistory {
  id?: number,
  startDate?: string,
  endDate?: string,
  active?: boolean,
  dischargeReason?: string,
  patientId: number,
  bedId?: number,
  reason: string,
  roomId: number
  patient?: Patient //?
}
