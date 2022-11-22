import { Moment } from "moment-timezone";

export default interface Therapy {
  id?: number,
  whenPrescribed?: Moment,
  amount: number,
  reason: string,
  prescribedId: number,
  doctorId: number,
  treatmentHistoryId: number
}