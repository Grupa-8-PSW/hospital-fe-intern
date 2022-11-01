export default interface Examination {
  id: number,
  doctorId: number,
  patientId: number,
  starts: Date,
  duration: number,
}
