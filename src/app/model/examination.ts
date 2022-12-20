import { Moment } from "moment-timezone";

export default interface Examination {
  id?: number,
  doctorId: number,
  patientId: number,
  startTime: Moment,
  duration: number,
  patientFirstName?: string
  patientLastName?: string
}
