import { Moment } from "moment-timezone";

export default interface Therapy {
  id?: number,
  whenPrescribed?: Moment,
  amount: number,
  reason: string,
  prescribedId?: number,
  therapyType: string,
  therapySubject: string,
  doctorId: number,
  treatmentHistoryId: number
}