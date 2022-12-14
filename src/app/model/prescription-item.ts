import MedicalDrugs from "./medicalDrugs"

export default interface PrescriptionItem {
    id?: number,
    medicine: MedicalDrugs,
    quantity: number
}
  