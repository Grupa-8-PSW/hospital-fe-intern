import { Moment } from "moment-timezone";
import Patient from "./patient";

export default interface TreatmentHistory {
  id?: number,
  startDate?: Moment,
  endDate?: Moment,
  active?: boolean,
  dischargeReason?: string,
  patientId: number,
  bedId?: number,
  reason: string,
  patient: Patient
}