import { Moment } from "moment-timezone";

export default interface TreatmentHistory {
  id?: number,
  startDate?: Moment,
  endDate?: Moment,
  active?: boolean,
  dischargeReason?: string,
  patientId: number,
  bedId?: number,
  reason: string
}